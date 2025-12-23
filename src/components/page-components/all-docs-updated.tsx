import React from "react";
import CardDocs from "../ui/all-docs-card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { dbFiles } from "@/db/export-json/index";
import { CommandPalette } from "@/components/ui/command-palette";
import fs from 'fs';
import path from 'path';

function getMdxDocs() {
  const docsDir = path.join(process.cwd(), 'src/docs');
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.mdx'));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const content = fs.readFileSync(path.join(docsDir, file), 'utf8');
    // Extract first H1 as title
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;
    // Extract first paragraph after H1 as description
    const descMatch = content.match(/^#\s+.+\n+([^#\n][^\n]*)/m);
    const description = descMatch ? descMatch[1].trim() : '';
    return { id: `mdx/${slug}`, title, description };
  });
}

function AllDocs() {
  const mdxDocs = getMdxDocs();
  const totalDocs = dbFiles.length + mdxDocs.length;
  
  return (
    <div className="min-h-screen py-28 max-w-6xl mx-auto px-8">
      <div className="space-y-3 mb-5">
        <h1 className="text-balance text-4xl md:text-7xl xl:text-[4rem]">
          All Documentations
        </h1>
        <p className="max-w-4xl text-muted-foreground">
          Explore our comprehensive collection of {totalDocs} guides and tutorials. 
          Find everything you need to get started and master the tools with our searchable documentation.
        </p>
        <span>
          Can't find what you're looking for?{" "}
          <Link
            href={"/contribution-guide"}
            className="font-semibold underline"
          >
            Wanna Contribute to Our Docs?
          </Link>
        </span>
      </div>

      {/* Search Integration */}
      <div className="max-w-lg mb-10">
        <CommandPalette />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center mt-10">
        {dbFiles.map((d, i) => (
          <span key={d.id || i}>
            <CardDocs
              id={d.id}
              title={d.title}
              desc={d.description}
              buttonTxt="Read More"
            />
          </span>
        ))}
        {mdxDocs.map((d) => (
          <span key={d.id}>
            <CardDocs
              id={d.id}
              title={d.title}
              desc={d.description}
              buttonTxt="Read More"
            />
          </span>
        ))}
        <CardDocs
          id={"contribution-guide"}
          icon={GithubIcon}
          title={"More Docs Coming Soon!"}
          desc={
            "Want to contribute to our docs? Check out the contribution guide!"
          }
          buttonTxt="Contribute"
          pro={true}
        />
      </div>
    </div>
  );
}

export default AllDocs;
