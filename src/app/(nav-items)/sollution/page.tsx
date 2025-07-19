import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { FileText, Sparkles, Users, Layers, Code, Eye, HeartHandshake, CheckCircle, Globe, AlertTriangle, PlayCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

const solutionPairs = [
  {
    icon: AlertTriangle,
    problem: "Outdated docs?",
    solution: "EasyGoDocs keeps docs fresh automatically with instant preview and easy contribution workflows."
  },
  {
    icon: Layers,
    problem: "Cluttered, hard-to-read pages?",
    solution: "Modern, minimal UI puts your content first, making docs a joy to read."
  },
  {
    icon: Code,
    problem: "Hard for new contributors?",
    solution: "Just a JSON and a TSX file—anyone can contribute, no complex setup."
  },
  {
    icon: Eye,
    problem: "Not accessible or mobile-friendly?",
    solution: "Docs look great and work everywhere, for everyone."
  },
  {
    icon: Users,
    problem: "Locked into one stack?",
    solution: "Go-first, but works for any language or project."
  },
  {
    icon: HeartHandshake,
    problem: "Docs don't evolve with the community?",
    solution: "Community-driven, open source, and always improving."
  },
];

const timelineSteps = [
  { icon: FileText, label: "Write in Markdown or MDX" },
  { icon: RefreshCw, label: "Preview Instantly" },
  { icon: Layers, label: "Structure with Components" },
  { icon: Users, label: "Contribute Easily" },
  { icon: Globe, label: "Share with the World" },
];

const testimonial = {
  quote: "EasyGoDocs transformed our documentation process. Our team and contributors love how easy it is to keep docs up-to-date and beautiful!",
  author: "Alex P., Open Source Maintainer"
};

const logos = [
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub" },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia" },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel" },
];

export default function SolutionPage() {
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
            Our Solution
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            EasyGoDocs solves real documentation pain points with a unique, community-driven approach.
          </p>
        </AnimatedGroup>
        {/* Problem/Solution Pairing Cards */}
        <AnimatedGroup preset="slide" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {solutionPairs.map((pair) => (
            <div
              key={pair.problem}
              className={`relative flex flex-col h-full justify-between bg-card/80 rounded-2xl p-8 shadow-lg border border-border items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <pair.icon className="h-10 w-10 text-primary mb-4" />
              <div className="flex flex-col flex-1 w-full">
                <span className="text-red-500 font-bold text-base mb-2 flex items-center justify-center gap-1">
                  {pair.problem}
                </span>
                <div className="border-b border-border w-2/3 mx-auto my-2 opacity-40" />
                <div className="flex items-start justify-center gap-2 mb-2 text-primary font-semibold text-base">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{pair.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>
        {/* Timeline/Flow Section */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How Documentation Flows with EasyGoDocs</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center">
                  <step.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="text-base text-muted-foreground font-medium">{step.label}</span>
                </div>
                {idx < timelineSteps.length - 1 && (
                  <span className="h-8 w-1 bg-primary/30 rounded-full md:h-1 md:w-8 md:my-0 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedGroup>
        {/* Testimonial Quote Section */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <div className="bg-primary/10 rounded-xl p-6 flex flex-col items-center">
            <span className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> What our users say
            </span>
            <blockquote className="italic text-muted-foreground text-base mb-2">“{testimonial.quote}”</blockquote>
            <span className="text-sm text-primary font-semibold">— {testimonial.author}</span>
          </div>
        </AnimatedGroup>
        {/* Call to Action */}
        <AnimatedGroup preset="fade" className="mb-16">
          <Link
            href="/all-docs"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200"
          >
            <PlayCircle className="h-6 w-6" /> Read user stories
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
