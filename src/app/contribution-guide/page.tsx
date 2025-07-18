import React from "react";
import { FaRegLightbulb, FaRegCheckCircle, FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineWarningAmber } from "react-icons/md";

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
          Contribution as Simple as Possible
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
          Welcome, contributor! Whether you&apos;re fixing typos, adding features, or just exploring,
          you&apos;re already making <span className="font-bold text-foreground">EasyGoDocs</span> better.
        </p>
      </section>

      {/* Callout Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-muted border border-border rounded-xl p-6 sm:p-8 shadow-sm" role="alert" aria-live="polite">
          <MdOutlineWarningAmber className="text-muted-foreground text-2xl" aria-hidden="true" />
          <span className="font-semibold text-foreground text-center sm:text-left">Don&apos;t Ignore This Section Like the One Above 😄</span>
        </div>
      </section>

      {/* Folder Structure Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegFolderOpen className="text-muted-foreground" aria-hidden="true" />
          Folder Structure
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
│   │   │   └── page.tsx  <-- Important Page
│   │   ├── contribution-guide
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── (main)
│   │   │   ├── easygodocs-better-auth
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── (public)
│   │       └── page.tsx
│   ├── components
│   │   ├── documentation
│   │   │   └── documentation-component.tsx
│   │   ├── page-components
│   │   │   ├── about-us-section.tsx
│   │   │   ├── footer-section.tsx
│   │   │   ├── hero-section-1.tsx
│   │   │   └── mvp-promo-section.tsx
│   │   └── ui
│   │       ├── animated-group.tsx
│   │       ├── button.tsx
│   │       ├── card-hover-effect.tsx
│   │       ├── scroll-area.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── text-effect.tsx
│   │       └── tubelight-navbar.tsx
│   ├── db
│   │   └── ai-introduction-db.json
│   └── lib
│       └── utils.ts`}
          </pre>
        </div>
      </section>

      {/* Database Structure Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb className="text-muted-foreground" aria-hidden="true" />
          Database Structure
        </h2>
        <div className="bg-card/80 rounded-2xl p-4 sm:p-8 shadow border border-border mb-4">
          <p className="mb-2"><strong>File:</strong> <code>ai-introduction-db.json</code></p>
          <p className="text-muted-foreground">Each entry should include:</p>
          <ul className="list-disc pl-6 text-foreground">
            <li><code>title</code>: Section or topic title</li>
            <li><code>command</code>: (optional) Command-line instruction</li>
            <li><code>description</code>: Explanation or notes</li>
          </ul>
        </div>
        <p className="font-semibold mb-1">Example:</p>
        <div className="bg-card/80 rounded-xl p-4 sm:p-8 shadow border border-border">
          <pre className="bg-transparent text-xs sm:text-sm overflow-x-auto" aria-label="Database JSON example">
{`{
  "title": "Getting Started",
  "command": "easygodocs init",
  "description": "Initialize your documentation project with a single command."
}`}
          </pre>
        </div>
      </section>

      {/* New Step: Add TSX file for new JSON */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <div className="bg-muted border border-dashed border-primary rounded-2xl p-4 sm:p-8 shadow flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <FaRegCheckCircle className="text-primary text-3xl mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Don&apos;t Forget: Render Your Data!</h3>
            <p className="text-foreground mb-2">
              <strong>After adding a new <code>.json</code> file</strong> to <code>src/db/</code>, you <span className="underline underline-offset-2">must</span> also create a <strong><code>.tsx</code> file with the same name</strong> under <code>src/components/documentation/</code>.
            </p>
            <p className="text-muted-foreground mb-2">
              This <strong>TSX file</strong> is responsible for rendering your JSON data in the UI. Without it, your new documentation won&apos;t appear on the site!
            </p>
            <div className="bg-card rounded-lg p-3 border border-border mt-2">
              <span className="font-mono text-xs sm:text-sm">src/db/&lt;your-topic&gt;.json</span>
              <span className="mx-2 text-muted-foreground">→</span>
              <span className="font-mono text-xs sm:text-sm">src/components/documentation/&lt;your-topic&gt;.tsx</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegCheckCircle className="text-muted-foreground" aria-hidden="true" />
          How to Contribute
        </h2>
        <ol className="list-decimal pl-6 text-foreground space-y-1">
          <li><strong>Fork the repository</strong> and create a feature branch.</li>
          <li><strong>Update or create documentation</strong> in the appropriate folder or <code>.json</code> file.</li>
          <li><strong>Open a pull request</strong> with a meaningful description of your change.</li>
        </ol>
      </section>

      {/* Tips Section */}
      <section className="w-full max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-2 mb-2">
          <FaRegLightbulb className="text-muted-foreground text-xl" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold">Tips for a Great Contribution</h2>
        </div>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Keep docs <strong>clear, concise, and consistent</strong>.</li>
          <li>Stick to the folder and DB structure.</li>
          <li>If you add new features, update related <code>.json</code> and <code>.tsx</code> files.</li>
          <li><strong>Ask questions.</strong> We&apos;re here to help you succeed!</li>
        </ul>
      </section>

      {/* Thank You Section */}
      <section className="w-full max-w-7xl mx-auto text-center mt-16 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">❤️ Thank You!</h2>
        <p className="text-base sm:text-lg text-muted-foreground font-medium">
          Thank you for making <span className="font-bold text-foreground">EasyGoDocs</span> better. Every line of code and documentation moves us forward. You&apos;re amazing! 🚀
        </p>
      </section>
    </div>
  );
}
  