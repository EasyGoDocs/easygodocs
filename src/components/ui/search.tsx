'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from './button';
import { searchClient, indexName } from '@/lib/algolia';

interface SearchResult {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}

export function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchAlgolia = async () => {
      try {
        // Fallback to basic search for now
        const response = await fetch('/api/search?q=' + encodeURIComponent(query));
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      }
    };

    const debounce = setTimeout(searchAlgolia, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search Docs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && (query.length >= 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map((result, index) => (
              <a
                key={index}
                href={`/mdx/${result.slug}`}
                className="block p-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {result.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {result.excerpt}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {result.category}
                </div>
              </a>
            ))
          ) : query.length >= 2 ? (
            <div className="p-3 text-gray-500 dark:text-gray-400 text-center">
              No results found for "{query}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
