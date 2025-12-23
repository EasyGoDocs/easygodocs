import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DocItem {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
}

export interface DocCategory {
  name: string;
  docs: DocItem[];
  icon: string;
}

export function getOrganizedDocs(): DocCategory[] {
  const docsDir = path.join(process.cwd(), 'src/docs');
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.mdx'));
  
  const docs: DocItem[] = files.map(file => {
    const filePath = path.join(docsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');
    const title = data.title || content.match(/^#\s+(.+)/m)?.[1] || slug;
    const excerpt = content.replace(/^#.+/gm, '').trim().slice(0, 120) + '...';
    
    // Auto-categorize based on content and filename
    let category = 'General';
    let tags: string[] = [];
    
    if (slug.includes('install') || content.includes('install')) {
      category = 'Installation';
      tags.push('setup', 'install');
    } else if (slug.includes('docker') || content.includes('docker')) {
      category = 'DevOps';
      tags.push('docker', 'containers');
    } else if (slug.includes('react') || content.includes('react')) {
      category = 'Frontend';
      tags.push('react', 'javascript');
    } else if (slug.includes('ubuntu') || content.includes('ubuntu')) {
      category = 'System';
      tags.push('linux', 'ubuntu');
    } else if (slug.includes('git') || content.includes('git')) {
      category = 'Development';
      tags.push('git', 'version-control');
    }
    
    return { title, slug, excerpt, category, tags };
  });

  // Group by category
  const categories = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, DocItem[]>);

  // Convert to array with icons
  const categoryIcons: Record<string, string> = {
    'Installation': '⚙️',
    'DevOps': '🐳',
    'Frontend': '⚛️',
    'System': '🐧',
    'Development': '💻',
    'General': '📚'
  };

  return Object.entries(categories).map(([name, docs]) => ({
    name,
    docs: docs.sort((a, b) => a.title.localeCompare(b.title)),
    icon: categoryIcons[name] || '📄'
  }));
}
