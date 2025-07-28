import React from "react";
import {
  FaRegLightbulb,
  FaRegCheckCircle,
  FaRegFolderOpen,
  FaRegFileCode,
} from "react-icons/fa";
import { Heart, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Legacy JSON Contribution Guide",
};

export default function LegacyJsonContributionPage() {
  return (
    <div className="pt-20 max-w-6xl mx-auto bg-background text-foreground px-4 sm:px-8 relative">
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-primary/10 to-transparent" />

      {/* Back to Main Guide */}
      <div className="mb-8">
        <Link 
          href="/contribution-guide" 
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Main Contribution Guide
        </Link>
      </div>

      {/* Hero Section */}
      <section className="w-full mb-12 text-center space-y-4 mt-12">
        <div className="inline-flex items-center justify-center border-2 shadow-md rounded-full p-2">
          <FaRegFileCode className="text-primary size-10" aria-hidden="true" />
        </div>
        <h1 className="text-balance text-4xl md:text-7xl xl:text-[4.25rem]">
          Legacy JSON Contribution Method
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Learn about the original JSON-based contribution method. 
          <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> New contributors should use the MDX method instead.</span>
        </p>
      </section>

      {/* Warning Notice */}
      <section className="w-full mb-10">
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2 text-yellow-900 dark:text-yellow-100">
            <FaRegLightbulb className="text-yellow-600" aria-hidden="true" />
            ⚠️ Legacy Method
          </h2>
          <p className="text-yellow-800 dark:text-yellow-200 mb-2">
            This is the original JSON-based contribution method. While it still works, we recommend using the new MDX method for new contributions as it&apos;s much simpler and more user-friendly.
          </p>
          <Link 
            href="/contribution-guide" 
            className="inline-flex items-center gap-2 text-yellow-700 dark:text-yellow-300 font-semibold hover:underline"
          >
            <FileText className="h-4 w-4" />
            Learn the new MDX method instead
          </Link>
        </div>
      </section>

      {/* Quick Start Steps */}
      <section className="w-full mx-auto mb-10">
        <div className="bg-muted border rounded-2xl p-6 sm:p-8 shadow flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
            <FaRegCheckCircle className="text-primary" aria-hidden="true" />
            How to Add Documentation (JSON Method)
          </h2>
          <ol className="list-decimal pl-6 text-foreground space-y-2">
            <li>
              <strong>Add a JSON file</strong> in <code>src/db/</code> (your doc&apos;s data), e.g., <code>my-doc.json</code>.
            </li>
            <li>
              <strong>Write your content</strong> in the JSON file, following the structure of other docs.
            </li>
            <li>
              Run{" "}
              <code className="border border-neutral-300 px-2 py-[2px] rounded-md bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                pnpm run build
              </code>{" "}
              locally. This will generate the docs index so your new doc is included.
            </li>
            <li>
              <strong>Push your changes</strong> to the repository.
            </li>
            <li>
              <strong>Open a Pull Request</strong>—that&apos;s it! The docs list will update automatically after the build.
            </li>
          </ol>
          <div className="bg-card rounded-lg p-3 border border-border mt-4 w-full">
            <span className="font-mono text-xs sm:text-sm">
              src/db/&lt;your-doc&gt;.json
            </span>
            <span className="mx-2 text-muted-foreground">→</span>
            <span className="font-mono text-xs sm:text-sm">pnpm run build</span>
          </div>
        </div>
      </section>

      {/* JSON Structure Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          JSON Structure
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border mb-4">
          <p className="mb-2">
            <strong>File:</strong> <code>&lt;your-doc&gt;.json</code>
          </p>
          <p className="text-muted-foreground">Each doc file should include:</p>
          <ul className="list-disc pl-6 text-foreground">
            <li>
              <code>title</code>: Section or topic title (used for the card and route)
            </li>
            <li>
              <code>description</code>: Short summary for the card
            </li>
            <li>
              <code>filename</code>: The JSON file name in <code>src/db/</code>
            </li>
            <li>
              <code>id</code>: (optional) Internal reference
            </li>
          </ul>
        </div>
        <p className="font-semibold mb-1">
          Example <code>docs-index.json</code> entry:
        </p>
        <div className="bg-card/80 rounded-xl p-4 sm:p-8 shadow border border-border">
          <pre
            className="bg-transparent text-xs sm:text-sm overflow-x-auto"
            aria-label="docs-index.json example"
          >
{`{
  "title": "Getting Started",
  "description": "Initialize your documentation project with a single command.",
  "filename": "getting-started.json"
}`}
          </pre>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegFolderOpen
            className="text-muted-foreground"
            aria-hidden="true"
          />
          Legacy Project Structure
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <pre
            className="bg-transparent text-xs sm:text-sm overflow-x-auto"
            aria-label="Legacy project folder structure"
          >
{`├── public
│   └── logoIcon.png
├── README.md
├── src
│   ├── app
│   │   ├── all-docs
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── contribution-guide
│   │   │   └── page.tsx
│   │   ├── (main)
│   │   │   └── <kebab-case-title>
│   │   │       └── page.tsx
│   ├── components
│   │   └── documentation
│   │       └── documentation-component.tsx
│   ├── db
│   │   ├── <your-doc>.json
│   │   └── docs-index.json
│   └── lib
│       └── utils.ts`}
          </pre>
        </div>
      </section>

      {/* Why We Moved to MDX */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          Why We Moved to MDX
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-red-600 dark:text-red-400">JSON Method Challenges</h3>
              <ul className="list-disc pl-6 text-sm space-y-2">
                <li>Complex JSON structure to learn</li>
                <li>Need to create both JSON and TSX files</li>
                <li>Manual navigation management</li>
                <li>Build step required for each change</li>
                <li>Harder for non-developers</li>
                <li>More prone to syntax errors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">MDX Method Benefits</h3>
              <ul className="list-disc pl-6 text-sm space-y-2">
                <li>Simple Markdown syntax</li>
                <li>Just one file per document</li>
                <li>Auto-generated navigation</li>
                <li>No build step needed</li>
                <li>Accessible to everyone</li>
                <li>Less error-prone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          Migrating from JSON to MDX
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <p className="mb-4">
            If you have existing JSON-based documentation, here&apos;s how to migrate to MDX:
          </p>
          <ol className="list-decimal pl-6 text-foreground space-y-2">
            <li>
              <strong>Create a new .mdx file</strong> in <code>src/docs/</code> with the same name as your JSON file
            </li>
            <li>
              <strong>Convert your content</strong> from JSON structure to Markdown format
            </li>
            <li>
              <strong>Test locally</strong> to ensure everything renders correctly
            </li>
            <li>
              <strong>Update any links</strong> that point to the old JSON-based route
            </li>
            <li>
              <strong>Remove the old JSON file</strong> once the MDX version is working
            </li>
          </ol>
        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full mb-10">
        <div className="flex items-center gap-2 mb-2">
          <FaRegLightbulb
            className="text-muted-foreground text-xl"
            aria-hidden="true"
          />
          <h2 className="text-xl sm:text-2xl font-bold">
            Tips for JSON Contributors
          </h2>
        </div>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>
            Keep docs <strong>clear, short, and consistent</strong>.
          </li>
          <li>Stick to the folder and JSON structure.</li>
          <li>
            Use <strong>kebab-case</strong> for folder names.
          </li>
          <li>
            If you add new features, update related <code>.json</code> and{" "}
            <code>page.tsx</code> files, then{" "}
            <strong>
              run <code>pnpm run build</code>
            </strong>{" "}
            before pushing.
          </li>
          <li>
            <strong>Consider migrating to MDX</strong> for new content.
          </li>
        </ul>
      </section>

      {/* Thank You Section */}
      <section className="w-full text-center mt-16 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 flex items-center justify-center gap-2">
          <Heart className="inline text-primary h-7 w-7" aria-hidden="true" />
          Thanks for Understanding!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground font-medium">
          We appreciate all contributors, whether you use the legacy JSON method or the new MDX approach. 
          Every contribution helps make EasyGoDocs better! 🚀
        </p>
      </section>
    </div>
  );
} 