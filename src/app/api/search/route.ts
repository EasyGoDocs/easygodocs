import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface DocMetadata {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  content: string;
}

let docsCache: DocMetadata[] | null = null;

function loadDocs(): DocMetadata[] {
  if (docsCache) return docsCache;

  const docsDir = path.join(process.cwd(), 'src/docs');
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.mdx'));
  
  docsCache = files.map(file => {
    const filePath = path.join(docsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');
    const title = data.title || content.match(/^#\s+(.+)/m)?.[1] || slug;
    const excerpt = content.replace(/^#.+/gm, '').trim().slice(0, 150) + '...';
    
    // Categorize based on content
    let category = 'General';
    if (content.includes('install') || content.includes('setup')) category = 'Installation';
    else if (content.includes('docker') || content.includes('container')) category = 'DevOps';
    else if (content.includes('react') || content.includes('javascript')) category = 'Frontend';
    else if (content.includes('ubuntu') || content.includes('linux')) category = 'System';
    
    return {
      title,
      slug,
      excerpt,
      category,
      content: content.toLowerCase()
    };
  });

  return docsCache;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const docs = loadDocs();
  const results = docs
    .filter(doc => 
      doc.title.toLowerCase().includes(query) ||
      doc.content.includes(query) ||
      doc.category.toLowerCase().includes(query)
    )
    .slice(0, 10)
    .map((doc) => ({ title: doc.title, slug: doc.slug, excerpt: doc.excerpt, category: doc.category })); // Remove content

  return NextResponse.json({ results });
}
