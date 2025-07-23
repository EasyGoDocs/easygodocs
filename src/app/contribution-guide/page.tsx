import React from "react";
import { FaRegLightbulb, FaRegCheckCircle, FaRegFolderOpen } from "react-icons/fa";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Contribution Guide",
};

export default function ContributionGuidePage() {
  return (
    <div className="pt-28 bg-background min-h-screen text-foreground px-4 sm:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-2">
          <FaRegCheckCircle className="inline text-muted-foreground" aria-hidden="true" />
          Contribute in Minutes. Docs for Everyone.
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Anyone can help make <span className="font-bold text-foreground">EasyGoDocs</span> better. Fix a typo, add a doc, or just explore. Every contribution counts!
        </p>
      </section>

      {/* Quick Start Steps */}
      <section className="w-full max-w-3xl mx-auto mb-10">
        <div className="bg-muted border border-primary rounded-2xl p-6 sm:p-8 shadow flex flex-col items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
            <FaRegCheckCircle className="text-primary" aria-hidden="true" />
            How to Add or Update Docs
          </h2>
          <ol className="list-decimal pl-6 text-foreground space-y-2 text-left w-full max-w-xl mx-auto">
            <li><strong>Add a JSON file</strong> in <code>src/db/</code> (your doc’s data), e.g., <code>my-doc.json</code>.</li>
            <li><strong>Add an entry</strong> to <code>src/db/docs-index.json</code> with the <code>title</code>, <code>description</code>, and <code>filename</code> (the <code>id</code> is optional for internal reference).</li>
            <li><strong>Name the folder</strong> in <code>src/app/(main)/</code> as the <strong>kebab-case</strong> version of your title (e.g., <code>AI Introduction</code> → <code>ai-introduction</code>).</li>
            <li><strong>Add a <code>page.tsx</code></strong> in that folder (see template below).</li>
            <li><strong>Open a Pull Request</strong>—that’s it! The docs list will update automatically.</li>
          </ol>
          <div className="bg-card rounded-lg p-3 border border-border mt-4 w-full">
            <span className="font-mono text-xs sm:text-sm">src/db/&lt;your-doc&gt;.json</span>
            <span className="mx-2 text-muted-foreground">→</span>
            <span className="font-mono text-xs sm:text-sm">src/app/(main)/&lt;kebab-case-title&gt;/page.tsx</span>
          </div>
          <div className="bg-card rounded-lg p-3 border border-border mt-2 w-full">
            <pre className="bg-transparent text-xs sm:text-sm overflow-x-auto" aria-label="page.tsx example">
{`// src/app/(main)/<kebab-case-title>/page.tsx
import DocumentationPage from "@/components/documentation/documentation-component";
import docData from "@/db/<your-doc>.json";
import React from "react";

function page() {
  return (
    <div>
      <DocumentationPage jsonData={docData} />
    </div>
  );
}

export default page;`}
            </pre>
          </div>
        </div>
      </section>

      {/* Kebab-case Naming Rule Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb className="text-muted-foreground" aria-hidden="true" />
          Folder & Route Naming: Kebab-case Rule
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border mb-4">
          <p className="mb-2">
            The folder name in <code>src/app/(main)/</code> and the route for your doc are automatically generated from the <code>title</code> in <code>docs-index.json</code> by converting it to <strong>kebab-case</strong> (all lowercase, spaces to hyphens, special characters removed).
          </p>
          <ul className="list-disc pl-6 text-foreground">
            <li><code>AI Introduction</code> → <code>ai-introduction</code></li>
            <li><code>Ubuntu Installation</code> → <code>ubuntu-installation</code></li>
            <li><code>Docker & Kubernetes</code> → <code>docker-kubernetes</code></li>
          </ul>
          <p className="mt-2">This ensures the <strong>Read More</strong> button on the docs list always links to the correct page. Just make sure your folder name matches the kebab-case version of your title!</p>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegFolderOpen className="text-muted-foreground" aria-hidden="true" />
          Project Folders (Where Things Go)
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <pre className="bg-transparent text-xs sm:text-sm overflow-x-auto" aria-label="Project folder structure">
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

      {/* JSON Structure Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb className="text-muted-foreground" aria-hidden="true" />
          How Docs Data Works
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border mb-4">
          <p className="mb-2"><strong>File:</strong> <code>&lt;your-doc&gt;.json</code></p>
          <p className="text-muted-foreground">Each entry in <code>docs-index.json</code> should include:</p>
          <ul className="list-disc pl-6 text-foreground">
            <li><code>title</code>: Section or topic title (used for the card and route)</li>
            <li><code>description</code>: Short summary for the card</li>
            <li><code>filename</code>: The JSON file name in <code>src/db/</code></li>
            <li><code>id</code>: (optional) Internal reference</li>
          </ul>
        </div>
        <p className="font-semibold mb-1">Example <code>docs-index.json</code> entry:</p>
        <div className="bg-card/80 rounded-xl p-4 sm:p-8 shadow border border-border">
          <pre className="bg-transparent text-xs sm:text-sm overflow-x-auto" aria-label="docs-index.json example">
{`{
  "title": "Getting Started",
  "description": "Initialize your documentation project with a single command.",
  "filename": "getting-started.json"
}`}
          </pre>
        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-2 mb-2">
          <FaRegLightbulb className="text-muted-foreground text-xl" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold">Pro Tips for Contributors</h2>
        </div>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Keep docs <strong>clear, short, and consistent</strong>.</li>
          <li>Stick to the folder and JSON structure.</li>
          <li>Use <strong>kebab-case</strong> for folder names (see above).</li>
          <li>If you add new features, update related <code>.json</code> and <code>page.tsx</code> files.</li>
          <li><strong>Ask questions.</strong> We’re here to help!</li>
        </ul>
      </section>

      {/* Thank You Section */}
      <section className="w-full max-w-7xl mx-auto text-center mt-16 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 flex items-center justify-center gap-2">
          <Heart className="inline text-primary h-7 w-7" aria-hidden="true" />
          You’re Awesome!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground font-medium">
          Thanks for making <span className="font-bold text-foreground">EasyGoDocs</span> better. Every line of code and doc moves us forward. 🚀
        </p>
      </section>
    </div>
  );
}
  