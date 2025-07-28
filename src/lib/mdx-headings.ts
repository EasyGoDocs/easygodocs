import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import type { Heading as MdastHeading, PhrasingContent } from 'mdast';

export interface Heading {
  depth: number;
  text: string;
  id: string;
}

export async function extractHeadings(markdown: string): Promise<Heading[]> {
  const tree = unified().use(remarkParse).parse(markdown);
  const headings: Heading[] = [];
  visit(tree, 'heading', (node: MdastHeading) => {
    const text = (node.children as PhrasingContent[])
      .filter((child) => child.type === 'text' || child.type === 'inlineCode')
      .map((child) => 'value' in child ? child.value : '')
      .join('');
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
    headings.push({
      depth: node.depth,
      text,
      id,
    });
  });
  return headings;
} 