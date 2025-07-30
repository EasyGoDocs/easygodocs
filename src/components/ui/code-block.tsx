"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    let textToCopy = '';
    if (typeof children === 'string') {
      textToCopy = children;
    } else if (React.isValidElement(children)) {
      const props = children.props as { children?: string };
      textToCopy = props.children || '';
    }
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3">
      {/* Language label */}
      {language && (
        <div className="absolute top-0 right-0 z-10 px-3 py-1.5 text-xs font-semibold text-white bg-[#1e1e1e] border border-slate-700 rounded-t-lg shadow-sm">
          {language}
        </div>
      )}
      
      {/* Copy button */}
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "absolute top-3 right-3 z-20 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#1e1e1e]/90 hover:bg-[#1e1e1e] border border-slate-700 shadow-sm hover:shadow-md",
          language && "top-10" // Adjust position if language label is present
        )}
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4 text-slate-300 hover:text-white" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>

      {/* Code content */}
      <div className={cn(
        "bg-[#1e1e1e] border border-slate-700 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-600",
        language && "pt-10", // Add top padding if language label is present
        className
      )}>
        <Highlight
          theme={themes.vsDark}
          code={typeof children === 'string' ? children : ''}
          language={language || 'text'}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className="text-sm leading-relaxed p-4 overflow-x-auto font-mono" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="min-h-[1.25rem]">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
} 