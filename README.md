# EasyGoDocs

**Effortless, elegant, and powerful documentation for your Go projects.**

---

## 🆕 Contributing Docs with MDX (Super Simple!)

You can now write documentation in simple Markdown/MDX files! This is the easiest way to contribute:

1. **Add a new `.mdx` file** in `src/docs/` (e.g., `my-topic.mdx`).
2. **Write your content** using Markdown headings (`#`, `##`, etc.), lists, links, and even React components (with MDX).
3. **Open a pull request**—that's it! Your doc will be available at `/mdx/my-topic`.

**Example:**

```mdx
# My Topic

Welcome to my docs!

## Getting Started

- Step 1
- Step 2

## More Info

See [the guide](https://example.com).
```

Your doc will be automatically:
- ✅ Available at `/mdx/my-topic`
- ✅ Added to the table of contents
- ✅ Styled with beautiful typography
- ✅ Responsive on all devices
- ✅ Dark mode compatible

---

## 🚀 Vision

EasyGoDocs is designed to make documentation as easy and enjoyable as writing code.  
Our mission is to empower teams and open-source communities to create, share, and maintain world-class documentation with minimal friction and maximum clarity.

- **Minimalistic & Modern UI:** Clean, distraction-free, and accessible by default.
- **Go-First, but Flexible:** Built for Go projects, but easily adaptable to any tech stack.
- **Powered by Next.js & MDX:** Enjoy fast, interactive docs with the flexibility of React and Markdown.
- **Community-Driven:** Contributions are easy, transparent, and celebrated.

---

## ✨ Features

- 📄 **MDX & Markdown Support:** Write docs in Markdown, extend with React components.
- 🧩 **Component-Based:** Modular, reusable UI for docs, guides, and API references.
- 🗂 **Auto-Generated Navigation:** Table of contents and sidebar generated from your headings.
- 🌗 **Accessible & Responsive:** Looks great on all devices, with a focus on accessibility.
- ⚡ **Instant Preview:** Hot reload and instant updates during development.
- 🔒 **Ready for Auth:** Example flows for protected docs and user guides.
- 🛠 **Easy Customization:** Theming, branding, and structure are all developer-friendly.
- 🚀 **Vercel Ready:** Optimized for deployment with static generation.

---

## 🏗️ Project Structure

```
├── public/
│   └── easygodocs-logo.svg         # Project logo (SVG, minimal, Figma-ready)
├── src/
│   ├── app/
│   │   ├── (main)/                 # Main app routes and layouts
│   │   │   └── mdx/
│   │   │       └── [slug]/
│   │   │           └── page.tsx    # MDX rendering (auto-generated routes)
│   │   ├── (nav-items)/            # Features, Pricing, About, Solution pages
│   │   ├── all-docs/               # Docs overview page
│   │   ├── contribution-guide/     # Contribution guide
│   │   └── ...                     # Other Next.js app routes
│   ├── components/
│   │   ├── documentation/          # Documentation rendering components
│   │   ├── page-components/        # Hero, footer, about, etc.
│   │   └── ui/                     # Reusable UI (buttons, nav, etc.)
│   ├── docs/                       # 📁 Your MDX files go here!
│   │   ├── react.mdx              # ✅ Example: /mdx/react
│   │   ├── chrome-download.mdx    # ✅ Example: /mdx/chrome-download
│   │   └── my-topic.mdx           # ➕ Your new doc: /mdx/my-topic
│   ├── db/                         # Legacy JSON docs (still supported)
│   └── lib/                        # Utilities
├── scripts/
│   ├── generate-db-index.cjs      # Legacy JSON index generator
│   └── generate-mdx-routes.cjs    # MDX route generator for build
├── package.json
├── next.config.ts
└── vercel.json                     # Vercel deployment config
```

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to see EasyGoDocs in action.

4. **Add your first doc:**
   ```bash
   # Create a new MDX file
   touch src/docs/my-topic.mdx
   
   # Write your content and visit /mdx/my-topic
   ```

---

## 📝 Contributing

We love contributions! The process is now super simple:

### For New Documentation:

1. **Create a new `.mdx` file** in `src/docs/` with a descriptive name
2. **Write your content** using standard Markdown
3. **Open a pull request**—that's it!

### For Existing Documentation:

- **Edit any `.mdx` file** in `src/docs/`
- **Fix typos, add sections, improve examples**
- **Submit your changes**

### What You Get Automatically:

- ✅ **Table of Contents:** Generated from your headings
- ✅ **Responsive Design:** Works on all devices
- ✅ **Dark Mode:** Automatic theme support
- ✅ **Syntax Highlighting:** For code blocks
- ✅ **Search Integration:** Your content is searchable
- ✅ **Fast Loading:** Static generation for performance

### Example MDX Structure:

```mdx
# My Documentation Title

Brief introduction to your topic.

## Getting Started

Step-by-step instructions:

1. First step
2. Second step
3. Third step

## Code Examples

```javascript
function example() {
  console.log("Hello, World!");
}
```

## Advanced Topics

More detailed information...

---

**Author:** Your Name  
**Contributors:** Team Members
```

For more details, see the [Contribution Guide](./src/app/contribution-guide/page.tsx).

---

## 💡 Why EasyGoDocs?

- **For maintainers:** Keep docs up-to-date, beautiful, and easy to extend.
- **For contributors:** Add new docs with just a Markdown file—no complex setup.
- **For users:** Find what you need, fast, on any device.

---

## 📦 Built With

- [Next.js](https://nextjs.org/) (App Router, MDX, Static Generation)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [Lucide Icons](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn](https://ui.shadcn.com/)
- [MDX](https://mdxjs.com/) (Markdown + React)

---

## 🚀 Deployment

EasyGoDocs is optimized for Vercel deployment:

```bash
# Build the project
pnpm run build

# Deploy to Vercel
vercel --prod
```

The build process automatically:
- ✅ Generates static routes for all MDX files
- ✅ Optimizes images and assets
- ✅ Creates production-ready bundle
- ✅ Handles all MDX compilation

---

## 🖼️ Logo

Our logo is a minimal, modern document with a checkmark or arrow—representing clarity, completion, and the Go spirit.  
See `/public/easygodocs-logo.svg` and variants in `/public/`.

---

## 📄 License

[MIT](LICENSE)

---

## 🙌 Acknowledgements

EasyGoDocs is an original solution to the pain point of documentation—designed and built from the ground up to make documentation truly easy, beautiful, and maintainable for everyone.

Special thanks to all contributors and the Go community!

---

**EasyGoDocs — Documentation made easy.**



