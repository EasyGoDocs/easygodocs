import { notFound } from 'next/navigation';
import { extractHeadings } from '@/lib/mdx-headings';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import Link from 'next/link';

function slugToFilename(slug: string) {
  return `${slug}.mdx`;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Use dynamic import to avoid fs/path issues in Next.js app dir
  const fs = (await import('fs')).default;
  const path = (await import('path')).default;
  const filePath = path.join(process.cwd(), 'src/docs', slugToFilename(slug));
  let source = '';
  try {
    source = fs.readFileSync(filePath, 'utf8');
  } catch {
    return notFound();
  }
  const headings = await extractHeadings(source);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="hidden font-bold sm:inline-block">
                EasyGoDocs
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link 
              href="/all-docs" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ml-25" 
            >
              All Docs
            </Link>
            <Link 
              href="/contribution-guide" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Contribute
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-row gap-8">
        <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-border lg:bg-background pt-14">
          <nav className="p-4">
            <h2 className="font-bold mb-4 text-lg mt-3">Table of Contents</h2>
            <ul className="space-y-2">
              {headings.map((h) => (
                <li key={h.id} style={{ marginLeft: `${(h.depth - 1) * 16}px` }}>
                  <a href={`#${h.id}`} className="hover:underline text-sm font-medium">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 max-w-4xl mx-auto px-6 py-8 lg:ml-64">
          <article className="prose prose-lg dark:prose-invert max-w-none [&>h1]:text-center [&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:mb-8 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:my-6 [&>ul]:pl-6 [&>li]:mb-2 [&>li]:text-lg [&>code]:bg-muted [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:font-semibold [&>a]:text-primary [&>a]:underline [&>a]:font-medium">
            <MDXRemote source={source} />
          </article>
        </main>
      </div>
    </div>
  );
} 