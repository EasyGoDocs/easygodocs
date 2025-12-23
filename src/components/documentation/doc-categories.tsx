'use client';

import { DocCategory } from '@/lib/docs';
import Link from 'next/link';
import { useState } from 'react';

interface DocCategoriesProps {
  categories: DocCategory[];
}

export function DocCategories({ categories }: DocCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory 
    ? categories.filter(cat => cat.name === selectedCategory)
    : categories;

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            !selectedCategory 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <div key={category.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              {category.name}
            </h3>
            
            <div className="space-y-3">
              {category.docs.slice(0, 3).map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/mdx/${doc.slug}`}
                  className="block p-3 border rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">{doc.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{doc.excerpt}</p>
                </Link>
              ))}
              
              {category.docs.length > 3 && (
                <Link
                  href="/all-docs"
                  className="block text-center text-blue-500 hover:text-blue-600 text-sm"
                >
                  +{category.docs.length - 3} more docs
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
