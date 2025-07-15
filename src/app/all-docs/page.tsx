import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder docs data
const docs = [
  {
    id: 1,
    title: 'Getting Started',
    description: 'Learn how to quickly set up and use EasyGoDocs for your Go projects.',
    href: '/docs/getting-started',
  },
  {
    id: 2,
    title: 'API Reference',
    description: 'Comprehensive API documentation for all available endpoints and features.',
    href: '/docs/api',
  },
  {
    id: 3,
    title: 'Authentication',
    description: 'Understand authentication flows and how to secure your documentation.',
    href: '/docs/authentication',
  },
  {
    id: 4,
    title: 'Deployment',
    description: 'Best practices and guides for deploying your documentation site.',
    href: '/docs/deployment',
  },
];

const AllDocsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8 text-center">All Documentation</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="bg-background border border-border rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">{doc.title}</h2>
              <p className="text-muted-foreground mb-4 text-sm">{doc.description}</p>
            </div>
            <Button asChild className="mt-auto w-full">
              <Link href={doc.href}>View</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDocsPage;