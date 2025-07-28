import React from "react";
import {
  FaRegLightbulb,
  FaRegCheckCircle,
  FaRegFolderOpen,
} from "react-icons/fa";
import { Heart, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contribution Guide",
};

export default function ContributionGuidePage() {
  return (
    <div className="pt-20 max-w-6xl mx-auto bg-background text-foreground px-4 sm:px-8 relative">
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-primary/10 to-transparent" />

      {/* Hero Section */}
      <section className="w-full mb-12 text-center space-y-4 mt-12">
        <div className="inline-flex items-center justify-center border-2 shadow-md rounded-full p-2">
          <FileText className="text-primary size-10" aria-hidden="true" />
        </div>
        <h1 className="text-balance text-4xl md:text-7xl xl:text-[4.25rem]">
          Write Docs in Markdown. That&apos;s It!
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Anyone can help make{" "}
          <span className="font-bold text-foreground">EasyGoDocs</span> better.
          Just write in Markdown and we&apos;ll handle the rest!
        </p>
      </section>

      {/* Quick Start Steps */}
      <section className="w-full mx-auto mb-10">
        <div className="bg-muted border rounded-2xl p-6 sm:p-8 shadow flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
            <FaRegCheckCircle className="text-primary" aria-hidden="true" />
            How to Add Documentation (3 Simple Steps)
          </h2>
          <ol className="list-decimal pl-6 text-foreground space-y-2">
            <li>
              <strong>Create a new .mdx file</strong> in <code>src/docs/</code> (e.g., <code>my-topic.mdx</code>).
            </li>
            <li>
              <strong>Write your content</strong> using Markdown headings (<code>#</code>, <code>##</code>, etc.), lists, links, and even React components.
            </li>
            <li>
              <strong>Open a Pull Request</strong>—that&apos;s it! Your doc will be available at <code>/mdx/my-topic</code>.
            </li>
          </ol>
          <div className="bg-card rounded-lg p-3 border border-border mt-4 w-full">
            <span className="font-mono text-xs sm:text-sm">
              src/docs/&lt;your-topic&gt;.mdx
            </span>
            <span className="mx-2 text-muted-foreground">→</span>
            <span className="font-mono text-xs sm:text-sm">/mdx/&lt;your-topic&gt;</span>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          Example Documentation
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border mb-4">
          <p className="mb-4">
            Here&apos;s a simple example of what your <code>.mdx</code> file should look like:
          </p>
          <pre
            className="bg-muted border rounded-lg p-4 text-xs sm:text-sm overflow-x-auto"
            aria-label="MDX example"
          >
{`# My Topic

Welcome to my documentation!

## Getting Started

- Step 1: Install the package
- Step 2: Configure settings
- Step 3: Start building

## Advanced Usage

You can use **bold text**, *italic text*, and \`code snippets\`.

### Code Example

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

## More Information

See [the official guide](https://example.com) for more details.

---

**Author:** Your Name  
**Contributors:** Team Members`}
          </pre>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          What You Get Automatically
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <ul className="list-disc pl-6 text-foreground space-y-2">
            <li>
              <strong>Table of Contents:</strong> Generated automatically from your headings
            </li>
            <li>
              <strong>Sidebar Navigation:</strong> Your doc appears in the docs list automatically
            </li>
            <li>
              <strong>Responsive Design:</strong> Looks great on all devices
            </li>
            <li>
              <strong>Syntax Highlighting:</strong> Code blocks are automatically styled
            </li>
            <li>
              <strong>Dark Mode Support:</strong> Works with the site&apos;s theme
            </li>
            <li>
              <strong>Search Integration:</strong> Your content is searchable
            </li>
          </ul>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegFolderOpen
            className="text-muted-foreground"
            aria-hidden="true"
          />
          Project Structure
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <pre
            className="bg-transparent text-xs sm:text-sm overflow-x-auto"
            aria-label="Project folder structure"
          >
{`├── src/
│   ├── docs/                    # 📁 Your MDX files go here
│   │   ├── react.mdx           # ✅ Example: /mdx/react
│   │   ├── my-topic.mdx        # ➕ Your new doc: /mdx/my-topic
│   │   └── ...
│   ├── app/
│   │   └── (main)/
│   │       └── mdx/
│   │           └── [slug]/
│   │               └── page.tsx # 🚀 Renders your MDX files
│   └── components/
│       └── documentation/       # 🧩 UI components for docs
└── package.json`}
          </pre>
        </div>
      </section>

      {/* MDX Features Section */}
      <section className="w-full mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb
            className="text-muted-foreground"
            aria-hidden="true"
          />
          MDX Features You Can Use
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Markdown Features</h3>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Headings (<code>#</code>, <code>##</code>, etc.)</li>
                <li>Lists (ordered and unordered)</li>
                <li>Links and images</li>
                <li>Code blocks with syntax highlighting</li>
                <li>Tables</li>
                <li>Blockquotes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">React Components</h3>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Interactive components</li>
                <li>Custom UI elements</li>
                <li>Embedded demos</li>
                <li>Dynamic content</li>
                <li>Custom styling</li>
              </ul>
            </div>
          </div>
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
            Pro Tips for Contributors
          </h2>
        </div>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>
            Use <strong>descriptive filenames</strong> (e.g., <code>docker-setup.mdx</code>).
          </li>
          <li>
            Start with a clear <strong>H1 heading</strong> that describes your topic.
          </li>
          <li>
            Use <strong>H2 and H3 headings</strong> to organize your content logically.
          </li>
          <li>
            Include <strong>code examples</strong> with proper syntax highlighting.
          </li>
          <li>
            Add <strong>links to related resources</strong> and official documentation.
          </li>
          <li>
            Keep your content <strong>clear, concise, and beginner-friendly</strong>.
          </li>
          <li>
            <strong>Test your MDX locally</strong> before submitting a PR.
          </li>
        </ul>
      </section>

      {/* Migration Notice */}
      <section className="w-full mb-10">
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <FaRegLightbulb className="text-blue-600" aria-hidden="true" />
            🆕 New Contribution Method
          </h2>
          <p className="text-blue-800 dark:text-blue-200 mb-2">
            We&apos;ve simplified the contribution process! Instead of creating JSON files and page components, 
            you can now just write Markdown/MDX files. This makes it much easier for everyone to contribute.
          </p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            The old JSON-based method is still supported for existing docs, but new contributions 
            should use the MDX approach described above.{" "}
            <Link href="/contribution-guide/legacy-json" className="underline hover:text-blue-600">
              Learn about the legacy JSON method
            </Link>.
          </p>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="w-full  text-center mt-16 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 flex items-center justify-center gap-2">
          <Heart className="inline text-primary h-7 w-7" aria-hidden="true" />
          You&apos;re Awesome!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground font-medium">
          Thanks for making{" "}
          <span className="font-bold text-foreground">EasyGoDocs</span> better.
          Every line of documentation helps the community! 🚀
        </p>
      </section>
    </div>
  );
}
