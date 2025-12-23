import { getOrganizedDocs } from "@/lib/docs";
import { CommandPalette } from "@/components/ui/command-palette";
import Link from "next/link";

export default function AllDocsPage() {
  const categories = getOrganizedDocs();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Documentation</h1>
        
        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <CommandPalette />
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
                <span className="text-sm text-gray-500 ml-2">({category.docs.length})</span>
              </h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                {category.docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/mdx/${doc.slug}`}
                    className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {doc.excerpt}
                    </p>
                    {doc.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
