import React from "react";

import CardDocs from "../ui/all-docs-card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { dbFiles } from "@/db/export-json/index";
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
  return (
    <div className="min-h-screen py-28 max-w-6xl mx-auto px-8">
      <div className="space-y-3 mb-5">
        <h1 className="text-balance text-4xl md:text-7xl xl:text-[4rem]">
          All Documentations
        </h1>
        <p className="max-w-4xl text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea
          nobis tenetur quidem possimus rerum exercitationem mollitia commodi
          ad, deserunt corrupti fugit, facilis ab aliquam vero aliquid delectus
          inventore? At!
        </p>
        <span>
          Nothing to read on the previous line,{" "}
          <Link
            href={"/contribution-guide"}
            className="font-semibold underline"
          >
            Wanna Contribute to Our Docs?
          </Link>
        </span>
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
