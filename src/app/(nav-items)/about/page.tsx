import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Users, Sparkles, HeartHandshake, Star, Globe, PlayCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const whyChecklist = [
    { icon: CheckCircle, text: "Effortless, structured documentation" },
    { icon: CheckCircle, text: "Simple JSON + TSX workflow" },
    { icon: CheckCircle, text: "Minimal, modern, and accessible UI" },
    { icon: CheckCircle, text: "Open source and community-driven" },
    { icon: CheckCircle, text: "Easy to contribute and extend" },
    { icon: CheckCircle, text: "Trusted by 100+ projects" },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-background min-h-screen flex flex-col items-center">
      {/* Soft background illustration */}
      <div className="h-[1px] w-full bg-gradient-to-r from-white via-black to-white absolute top-0"></div>
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.12)_0%,transparent_70%)] z-0" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[25rem] h-[25rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10)_0%,transparent_90%)] z-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_60%,rgba(128,128,128,0.07)_0%,transparent_80%)] z-0" />
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <Star className="w-96 h-96 text-primary/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full flex flex-col items-center text-center relative z-10">
        {/* Heading */}
        <AnimatedGroup preset="fade" className="mb-12">
          <h1 className="text-balance text-4xl md:text-7xl xl:text-[4rem] mb-6">
            About EasyGoDocs
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Our mission is to make documentation as easy and enjoyable as writing code. We empower teams and open-source communities to create, share, and maintain world-class documentation with minimal friction and maximum clarity.
          </p>
        </AnimatedGroup>
        {/* Vision, Values, Team Cards */}
        <AnimatedGroup preset="slide" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border flex flex-col items-center text-center h-full">
            <Sparkles className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Our Vision</h3>
            <p className="text-muted-foreground text-base">
              To revolutionize the way teams approach documentation by providing modern, intuitive, and collaborative tools that fit seamlessly into your workflow.
            </p>
          </div>
          <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border flex flex-col items-center text-center h-full">
            <HeartHandshake className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-left">
              <li><strong>Minimalistic & Modern UI:</strong> Clean, distraction-free, and accessible by default.</li>
              <li><strong>Go-First, but Flexible:</strong> Built for Go projects, but easily adaptable to any tech stack.</li>
              <li><strong>Powered by Next.js & React:</strong> Fast, interactive docs with the flexibility of components.</li>
              <li><strong>Community-Driven:</strong> Contributions are easy, transparent, and celebrated.</li>
            </ul>
          </div>
          <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border flex flex-col items-center text-center h-full">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Our Team</h3>
            <p className="text-muted-foreground text-base">
              A diverse group of engineers, designers, and creators dedicated to building the future of documentation. We value innovation, transparency, and user-centric design.
            </p>
          </div>
        </AnimatedGroup>
        {/* Fun Fact / Community Stat */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <div className="bg-primary/10 rounded-xl p-6 flex flex-col items-center">
            <span className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
              <Globe className="h-5 w-5" /> Did you know?
            </span>
            <p className="text-base text-muted-foreground">
              EasyGoDocs is trusted by 100+ projects and contributors worldwide, making documentation easier for everyone.
            </p>
          </div>
        </AnimatedGroup>
        {/* Why EasyGoDocs Section */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why EasyGoDocs?</h2>
          <p className="text-base text-muted-foreground mb-4">
            EasyGoDocs is designed to make documentation truly easy, beautiful, and maintainable for everyone. Here’s why teams and contributors love it:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {whyChecklist.map((item) => (
              <li key={item.text} className="flex items-center gap-2 text-base text-muted-foreground">
                <item.icon className="h-5 w-5 text-primary" /> {item.text}
              </li>
            ))}
          </ul>
        </AnimatedGroup>
        {/* Join Us CTA */}
        <AnimatedGroup preset="fade" className="mb-16">
          <Link
            href="/contribution-guide"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200"
          >
            <PlayCircle className="h-6 w-6" /> Join our community
          </Link>
        </AnimatedGroup>
      </div>
    </section>
  );
}
