import { notFound } from 'next/navigation';
import { extractHeadings } from '@/lib/mdx-headings';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { CodeBlock } from '@/components/ui/code-block';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Edit, Github, Share2 } from 'lucide-react';

// Generate static params for all MDX files
export async function generateStaticParams() {
  const docsDirectory = path.join(process.cwd(), 'src/docs');
  const filenames = fs.readdirSync(docsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Read the MDX file
  const filePath = path.join(process.cwd(), 'src/docs', `${slug}.mdx`);
  let source = '';
  
  try {
    source = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Failed to load MDX file: ${filePath}`, error);
    return notFound();
  }

  const headings = await extractHeadings(source);
  
  // Extract title from content
  const titleMatch = source.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Custom components for MDX
  const components = {
    pre: ({ children, ...props }: React.ComponentProps<'pre'>) => {
      let language = '';
      let codeContent = children;
      
      if (React.isValidElement(children)) {
        const className = (children.props as { className?: string })?.className;
        if (className) {
          language = className.replace('language-', '');
        }
        codeContent = (children.props as { children?: React.ReactNode })?.children;
      }
      
      return (
        <CodeBlock language={language} {...props}>
          {codeContent}
        </CodeBlock>
      );
    },
    code: ({ children, className, ...props }: React.ComponentProps<'code'>) => {
      if (className) {
        return <code className={className} {...props}>{children}</code>;
      }
      return (
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono border" {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/all-docs" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Docs
              </Link>
            </Button>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-900 dark:text-gray-100">EasyGoDocs</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contribution-guide" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Page
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Table of Contents - Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg border p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  On This Page
                </h2>
                <nav className="space-y-2">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      style={{ paddingLeft: `${(h.depth - 1) * 12}px` }}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
              {/* Article Header */}
              <div className="border-b p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Link href="/all-docs" className="hover:text-blue-600">Documentation</Link>
                  <span>/</span>
                  <span className="text-gray-900 dark:text-gray-100">{title}</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Last updated: Today</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>

              {/* Article Content */}
              <article className="p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                  prose-p:text-gray-700 dark:prose-p:text-gray-300
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                  prose-code:text-pink-600 dark:prose-code:text-pink-400
                  prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
                  [&>h1]:hidden
                  [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:border-b [&>h2]:pb-2
                  [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4
                  [&>h4]:text-lg [&>h4]:font-medium [&>h4]:mt-6 [&>h4]:mb-3
                  [&>p]:leading-relaxed [&>p]:mb-6
                  [&>ul]:my-6 [&>ol]:my-6
                  [&>li]:mb-2
                  [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-50 dark:[&>blockquote]:bg-blue-950/20 [&>blockquote]:p-4 [&>blockquote]:my-6
                ">
                  <MDXRemote source={source} components={components} />
                </div>
              </article>

              {/* Article Footer */}
              <div className="border-t p-8 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Found an issue? Help us improve this page.
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contribution-guide" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Edit on GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 