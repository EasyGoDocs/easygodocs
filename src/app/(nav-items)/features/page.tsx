import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Layers, Search, RefreshCw, Lock, Paintbrush, Sparkles, CheckCircle, PlayCircle, FileJson, FileCode2 } from "lucide-react";
import Link from "next/link";

const spotlightFeature = {
  icon: FileJson,
  headline: "Simple JSON + TSX Workflow",
  desc: "Create a JSON file using our provided structure, then a TSX file using our template, and push. No complex markup, no learning curve—just structured, maintainable docs that anyone can contribute to.",
  tip: "Spotlight Feature"
};

const coreFeatures = [
  {
    icon: FileCode2,
    headline: "Template-Driven Docs",
    desc: "Use our TSX templates to render your documentation. Consistent structure, easy updates, and a familiar React-based approach.",
    tip: "No special syntax to learn."
  },
  {
    icon: Layers,
    headline: "Component-Based",
    desc: "Modular, reusable UI for docs, guides, and API references—customize as you grow. Build once, use everywhere.",
    tip: "Create your own custom doc components!"
  },
  {
    icon: Search,
    headline: "Structured Navigation",
    desc: "Sidebar, table of contents, and search for easy exploration and quick access. Never get lost in your docs again.",
    tip: "Find anything in seconds."
  },
];

const devFeatures = [
  {
    icon: RefreshCw,
    headline: "Instant Preview",
    desc: "Hot reload and instant updates during development for a seamless writing experience. See your changes live as you type.",
    tip: "No more waiting—just write and see!"
  },
  {
    icon: Lock,
    headline: "Ready for Auth",
    desc: "Example flows for protected docs and user guides—secure your content as needed. Share what you want, keep the rest private.",
    tip: "Protect sensitive docs with ease."
  },
  {
    icon: Paintbrush,
    headline: "Easy Customization",
    desc: "Theming, branding, and structure are all developer-friendly and easy to tweak. Make your docs truly yours.",
    tip: "Personalize every detail."
  },
];

const checklist = [
  { icon: CheckCircle, text: "Minimal, modern UI" },
  { icon: CheckCircle, text: "Built for Go, works for any stack" },
  { icon: CheckCircle, text: "Component-driven and flexible" },
  { icon: CheckCircle, text: "Easy JSON + TSX workflow" },
  { icon: CheckCircle, text: "Instant preview and hot reload" },
  { icon: CheckCircle, text: "Easy to contribute and extend" },
  { icon: CheckCircle, text: "Secure, open, and community-driven" },
];

const logos = [
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub" },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia" },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel" },
];

export default function FeaturesPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-background min-h-screen flex flex-col items-center">
      {/* Soft background illustration */}
      <div className="h-[1px] w-full bg-gradient-to-r from-white via-black to-white absolute top-0"></div>
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.12)_0%,transparent_70%)] z-0" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[25rem] h-[25rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10)_0%,transparent_90%)] z-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_60%,rgba(128,128,128,0.07)_0%,transparent_80%)] z-0" />
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <Sparkles className="w-96 h-96 text-primary/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full flex flex-col items-center text-center relative z-10">
        {/* Heading */}
        <AnimatedGroup preset="fade" className="mb-12">
          <h1 className="text-balance text-4xl md:text-7xl xl:text-[4rem] mb-6">
            Features
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Everything you need to create, manage, and share world-class documentation—beautifully and effortlessly.
          </p>
        </AnimatedGroup>
        {/* Spotlight Feature */}
        <AnimatedGroup preset="slide" className="mb-16 w-full max-w-3xl mx-auto">
          <div className="relative flex flex-col h-full justify-between bg-gradient-to-br from-primary/90 to-primary/60 rounded-2xl p-10 shadow-xl border-2 border-primary items-center text-center text-white">
            <spotlightFeature.icon className="h-12 w-12 mb-4" />
            <span className="absolute top-4 right-4 bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              {spotlightFeature.tip}
            </span>
            <span className="text-primary font-bold text-base mb-2 flex items-center justify-center gap-1 text-white drop-shadow">
              <Sparkles className="h-4 w-4" /> {spotlightFeature.headline}
            </span>
            <div className="border-b border-white/40 w-2/3 mx-auto my-2 opacity-40" />
            <p className="text-white text-base mb-4">
              {spotlightFeature.desc}
            </p>
          </div>
        </AnimatedGroup>
        {/* Core Features Section */}
        <AnimatedGroup preset="fade" className="mb-8 w-full">
          <h2 className="text-2xl font-bold mb-4">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {coreFeatures.map((feature) => (
              <div
                key={feature.headline}
                className="relative flex flex-col h-full justify-between bg-card/80 rounded-2xl p-8 shadow-lg border border-border items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <span className="text-primary font-bold text-base mb-2 flex items-center justify-center gap-1">
                  <Sparkles className="h-4 w-4" /> {feature.headline}
                </span>
                <div className="border-b border-border w-2/3 mx-auto my-2 opacity-40" />
                <p className="text-muted-foreground text-base mb-4">
                  {feature.desc}
                </p>
                <span className="text-xs text-muted-foreground mt-auto italic flex items-center justify-center gap-1">
                  <Sparkles className="h-3 w-3 text-primary" /> {feature.tip}
                </span>
              </div>
            ))}
          </div>
        </AnimatedGroup>
        {/* Developer Experience Section */}
        <AnimatedGroup preset="fade" className="mb-8 w-full">
          <h2 className="text-2xl font-bold mb-4">Developer Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {devFeatures.map((feature) => (
              <div
                key={feature.headline}
                className="relative flex flex-col h-full justify-between bg-card/80 rounded-2xl p-8 shadow-lg border border-border items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <span className="text-primary font-bold text-base mb-2 flex items-center justify-center gap-1">
                  <Sparkles className="h-4 w-4" /> {feature.headline}
                </span>
                <div className="border-b border-border w-2/3 mx-auto my-2 opacity-40" />
                <p className="text-muted-foreground text-base mb-4">
                  {feature.desc}
                </p>
                <span className="text-xs text-muted-foreground mt-auto italic flex items-center justify-center gap-1">
                  <Sparkles className="h-3 w-3 text-primary" /> {feature.tip}
                </span>
              </div>
            ))}
          </div>
        </AnimatedGroup>
        {/* Did you know? Fun Fact Section */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <div className="bg-primary/10 rounded-xl p-6 flex flex-col items-center">
            <span className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Did you know?
            </span>
            <p className="text-base text-muted-foreground">
              EasyGoDocs powers documentation for 100+ projects and is trusted by developers worldwide for its speed, flexibility, and ease of use.
            </p>
          </div>
        </AnimatedGroup>
        {/* Why EasyGoDocs Features? Checklist */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why EasyGoDocs Features?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {checklist.map((item) => (
              <li key={item.text} className="flex items-center gap-2 text-base text-muted-foreground">
                <item.icon className="h-5 w-5 text-primary" /> {item.text}
              </li>
            ))}
          </ul>
        </AnimatedGroup>
        {/* Call to Action */}
        <AnimatedGroup preset="fade" className="mb-16">
          <Link
            href="/all-docs"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200"
          >
            <PlayCircle className="h-6 w-6" /> See it in action
          </Link>
        </AnimatedGroup>
        {/* Trust/Testimonials Section */}
        <AnimatedGroup preset="fade" className="w-full max-w-3xl mx-auto mb-4">
          <div className="flex flex-col items-center">
            <span className="text-muted-foreground text-sm mb-2">Trusted by developers and teams worldwide</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
