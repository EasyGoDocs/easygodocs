import { notFound } from 'next/navigation';
import { extractHeadings } from '@/lib/mdx-headings';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { CodeBlock } from '@/components/ui/code-block';
import { Button } from '@/components/ui/button';
import { TableOfContents } from '@/components/ui/table-of-contents';
import { ArrowLeft, Edit, Github, Share2, ChevronRight, Clock, User } from 'lucide-react';

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
    h1: ({ children, ...props }: React.ComponentProps<'h1'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h1 id={id} {...props}>{children}</h1>;
    },
    h2: ({ children, ...props }: React.ComponentProps<'h2'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }: React.ComponentProps<'h3'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h3 id={id} {...props}>{children}</h3>;
    },
    h4: ({ children, ...props }: React.ComponentProps<'h4'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h4 id={id} {...props}>{children}</h4>;
    },
    h5: ({ children, ...props }: React.ComponentProps<'h5'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h5 id={id} {...props}>{children}</h5>;
    },
    h6: ({ children, ...props }: React.ComponentProps<'h6'>) => {
      const text = typeof children === 'string' ? children : '';
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
      return <h6 id={id} {...props}>{children}</h6>;
    },
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
        <code className="relative rounded bg-slate-100 dark:bg-slate-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:text-slate-100" {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ children, ...props }: React.ComponentProps<'blockquote'>) => (
      <blockquote className="mt-6 border-l-2 border-slate-300 dark:border-slate-600 pl-6 italic text-slate-800 dark:text-slate-200" {...props}>
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 scroll-smooth">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <span className="font-bold text-slate-900 dark:text-white">EasyGoDocs</span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="/all-docs" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                  Documentation
                </Link>
                <Link href="/contribution-guide" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                  Contribute
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/EasyGoDocs/easygodocs" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8">
              {/* Back Button */}
              <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                  <Link href="/all-docs" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Documentation
                  </Link>
                </Button>
              </div>

              {/* Table of Contents */}
              <TableOfContents headings={headings} />
            </div>
          </div>

          {/* Main Content */}
          <div className="min-w-0 flex-1">
            <main className="py-8">
              {/* Breadcrumb */}
              <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/all-docs" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                      Documentation
                    </Link>
                  </li>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                  <li className="text-slate-900 dark:text-white font-medium">{title}</li>
                </ol>
              </nav>

              {/* Article */}
              <article className="max-w-none">
                {/* Header */}
                <header className="mb-12">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    {title}
                  </h1>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Last updated 2 days ago
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      EasyGoDocs Team
                    </div>
                  </div>
                </header>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none
                  prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal
                  prose-h1:text-4xl prose-h1:tracking-tight prose-h1:text-slate-900 dark:prose-h1:text-white
                  prose-h2:text-2xl prose-h2:tracking-tight prose-h2:text-slate-900 dark:prose-h2:text-white prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-800 prose-h2:pb-2
                  prose-h3:text-xl prose-h3:tracking-tight prose-h3:text-slate-900 dark:prose-h3:text-white
                  prose-h4:text-lg prose-h4:tracking-tight prose-h4:text-slate-900 dark:prose-h4:text-white
                  prose-p:text-slate-700 dark:prose-p:text-slate-300
                  prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 dark:prose-a:text-sky-400 dark:hover:prose-a:text-sky-300
                  prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                  prose-code:font-mono prose-code:font-medium
                  prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-800
                  prose-ol:text-slate-700 dark:prose-ol:text-slate-300
                  prose-ul:text-slate-700 dark:prose-ul:text-slate-300
                  prose-li:text-slate-700 dark:prose-li:text-slate-300
                  prose-table:text-slate-700 dark:prose-table:text-slate-300
                  prose-thead:border-slate-200 dark:prose-thead:border-slate-800
                  prose-tr:border-slate-200 dark:prose-tr:border-slate-800
                  prose-th:text-slate-900 dark:prose-th:text-white
                  prose-td:text-slate-700 dark:prose-td:text-slate-300
                  [&>h1]:hidden
                ">
                  <MDXRemote source={source} components={components} />
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Found an error? Help us improve this page on{' '}
                      <Link href="/contribution-guide" className="font-medium text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300">
                        GitHub
                      </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contribution-guide">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit this page
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </footer>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 