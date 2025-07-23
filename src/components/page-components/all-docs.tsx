import React from "react";

import CardDocs from "../ui/all-docs-card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { dbFiles } from "@/db/export-json/index";

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
        {dbFiles.map((d, i) => {
          return (
            <span key={i}>
              <CardDocs
                id={d.id}
                title={d.title}
                desc={d.description}
                buttonTxt="Read More"
              />
            </span>
          );
        })}
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
