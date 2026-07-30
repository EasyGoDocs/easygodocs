'use client';

import React from 'react';

interface Heading {
  depth: number;
  text: string;
  id: string;
}

interface TOCProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TOCProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, headingId: string) => {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div>
      <h5 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">On this page</h5>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="block py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            style={{ paddingLeft: `${(heading.depth - 1) * 16}px` }}
            onClick={(e) => handleClick(e, heading.id)}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
