"use client";

import React from "react";
import docsIndex from "@/db/docs-index.json";
import CardDocs from "../ui/all-docs-card";
import { truncateString } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

// Utility to convert a string to kebab-case
function toKebabCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove special chars
    .replace(/\s+/g, "-")         // spaces to hyphens
    .replace(/-+/g, "-")          // collapse multiple hyphens
    .replace(/^-+|-+$/g, "");     // trim hyphens
}

function AllDocs() {
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
        {docsIndex.map((d, i) => {
          const kebabTitle = toKebabCase(d.title);
          return (
            <span key={i}>
              <Link href={`/(main)/${kebabTitle}`} passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
                  <CardDocs
                    title={d.title}
                    desc={truncateString(d.description)}
                    buttonTxt="Read More"
                  />
                </a>
              </Link>
            </span>
          );
        })}
        <CardDocs
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
