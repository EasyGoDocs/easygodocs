import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BadgeCheck, Users, Code, Star, Sparkles, CheckCircle, ShieldCheck, Github } from "lucide-react";
import Link from "next/link";

const pricingBenefits = [
  {
    icon: BadgeCheck,
    headline: "Effortless Maintenance",
    title: "For Maintainers",
    desc: "Keep your documentation up-to-date, beautiful, and easy to extend—at no cost. Enjoy a streamlined workflow that lets you focus on your code, not your docs.",
    tip: "No vendor lock-in. Integrate with your existing tools!"
  },
  {
    icon: Code,
    headline: "Contribute in Minutes",
    title: "For Contributors",
    desc: "Add new docs or improve existing ones with just a JSON and a TSX file—no complex setup or licensing. Our intuitive structure and clear guidelines make it easy for anyone to contribute.",
    tip: "Open a pull request and see your changes live instantly!"
  },
  {
    icon: Users,
    headline: "Seamless Experience",
    title: "For Users",
    desc: "Find what you need, fast, on any device—always free. Our responsive, accessible UI ensures a delightful reading experience, whether you're on desktop, tablet, or mobile.",
    tip: "Mobile-friendly and accessible for everyone."
  },
  {
    icon: ShieldCheck,
    headline: "Secure & Open",
    title: "For Everyone",
    desc: "Your docs are always yours. Open source, MIT licensed, and secure by design. No hidden fees, no lock-in, just freedom.",
    tip: "Trusted by the community."
  },
];

const checklist = [
  { icon: CheckCircle, text: "100% Free & Open Source" },
  { icon: CheckCircle, text: "MIT Licensed" },
  { icon: CheckCircle, text: "No Paywalls or Hidden Fees" },
  { icon: CheckCircle, text: "Modern, Minimal UI" },
  { icon: CheckCircle, text: "Instant Preview & Hot Reload" },
  { icon: CheckCircle, text: "Mobile & Accessibility Ready" },
  { icon: CheckCircle, text: "Easy Contribution Workflow" },
  { icon: CheckCircle, text: "Community-Driven & Secure" },
];

const logos = [
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub" },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia" },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel" },
];

export default function PricingPage() {
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
            Pricing
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            <strong>EasyGoDocs is 100% free and open source.</strong> No hidden fees. No paywalls. Just effortless, elegant documentation for everyone.
          </p>
        </AnimatedGroup>
        {/* Pricing Cards Grid */}
        <AnimatedGroup preset="slide" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-12">
          {pricingBenefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`relative flex flex-col h-full justify-between bg-card/80 rounded-2xl p-8 shadow-lg border border-border items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {i === 0 && (
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Forever Free
                </span>
              )}
              <benefit.icon className="h-10 w-10 text-primary mb-4" />
              <div className="flex flex-col flex-1 w-full">
                <span className="text-primary font-bold text-base mb-2 flex items-center justify-center gap-1">
                  <Sparkles className="h-4 w-4" /> {benefit.headline}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <div className="border-b border-border w-2/3 mx-auto my-2 opacity-40" />
                <p className="text-muted-foreground text-base mb-4">
                  {benefit.desc}
                </p>
                <span className="text-xs text-muted-foreground mt-auto italic flex items-center justify-center gap-1">
                  <Sparkles className="h-3 w-3 text-primary" /> {benefit.tip}
                </span>
              </div>
            </div>
          ))}
        </AnimatedGroup>
        {/* What You Get Checklist */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {checklist.map((item) => (
              <li key={item.text} className="flex items-center gap-2 text-base text-muted-foreground">
                <item.icon className="h-5 w-5 text-primary" /> {item.text}
              </li>
            ))}
          </ul>
        </AnimatedGroup>
        {/* Why Free / Open Source Promise */}
        <AnimatedGroup preset="fade" className="mb-12 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why Free?</h2>
          <p className="text-base text-muted-foreground mb-2">
            EasyGoDocs is built by and for the open source community. We believe documentation should be accessible to everyone, forever. That’s why we’re <span className="font-semibold text-primary">100% free</span>, <span className="font-semibold text-primary">MIT licensed</span>, and always will be.
          </p>
          <p className="text-base text-muted-foreground">
            No hidden costs, no vendor lock-in, and no restrictions. Contribute, fork, or use EasyGoDocs however you want—your docs, your way.
          </p>
        </AnimatedGroup>
        {/* Call to Action */}
        <AnimatedGroup preset="fade" className="mb-16">
          <Link
            href="https://github.com/EasyGoDocs/easygodocs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Github className="h-6 w-6" /> Star on GitHub
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
