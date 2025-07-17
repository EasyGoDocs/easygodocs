export const metadata = {
    title: "Contribution Guide",
  };
  
  export default function ContributionGuidePage() {
    return (
      <div className="pt-28"> {/* Add top padding to avoid navbar overlap */}
        <article className="prose prose-lg max-w-4xl mx-auto px-4 py-10" >
          <h1>🤝 Contribution as Simple as Possible</h1>
  
          <p>
            Welcome, contributor! Whether you're fixing typos, adding features, or just exploring,
            you're already making EasyGoDocs better.
          </p>
  
          <hr />
  
          <h2>📄 Lorem Ipsum</h2>
          <p>This is placeholder text for illustrative purposes.</p>
  
          <hr />
  
          <h2>⚠️ Don't Ignore This Section Like the One Above 😄</h2>
  
          <h3>🗂 Folder Structure</h3>
          <pre>
            <code>
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
            </code>
          </pre>
  
          <h3>🧠 Database Structure</h3>
          <p>
            <strong>File:</strong> <code>ai-introduction-db.json</code>
          </p>
          <p>Each entry should include:</p>
          <ul>
            <li><code>title</code>: Section or topic title</li>
            <li><code>command</code>: (optional) Command-line instruction</li>
            <li><code>description</code>: Explanation or notes</li>
          </ul>
  
          <p><strong>Example:</strong></p>
          <pre>
            <code>
              {`{
    "title": "Getting Started",
    "command": "easygodocs init",
    "description": "Initialize your documentation project with a single command."
  }`}
            </code>
          </pre>
  
          <hr />
  
          <h2>🚀 How to Contribute</h2>
          <ol>
            <li><strong>Fork the repository</strong> and create a feature branch.</li>
            <li><strong>Update or create documentation</strong> in the appropriate folder or <code>.json</code> file.</li>
            <li><strong>Open a pull request</strong> with a meaningful description of your change.</li>
          </ol>
  
          <hr />
  
          <h2>💡 Tips for a Great Contribution</h2>
          <ul>
            <li>Keep docs <strong>clear, concise, and consistent</strong>.</li>
            <li>Stick to the folder and DB structure.</li>
            <li>If you add new features, update related <code>.json</code> and <code>.tsx</code> files.</li>
            <li><strong>Ask questions.</strong> We’re here to help you succeed!</li>
          </ul>
  
          <hr />
  
          <h2>❤️ Thank You!</h2>
          <p>
            Thank you for making EasyGoDocs better. Every line of code and documentation moves us forward. You're amazing! 🚀
          </p>
        </article>
      </div>
    );
  }
  