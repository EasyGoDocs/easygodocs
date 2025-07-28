"use client";
import React from "react";
import Link from "next/link";
import { Rocket, Zap, Layers, ArrowRight } from "lucide-react";

export function MvpPromoSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-background">
      <div className="h-[1px] w-full bg-gradient-to-r from-white via-black to-white absolute top-0"></div>
      {/* Radial gradient top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.12)_0%,transparent_70%)] z-0"
      />
      {/* Radial gradient bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[25rem] h-[25rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10)_0%,transparent_90%)] z-0"
      />
      {/* Subtle center radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_60%,rgba(128,128,128,0.07)_0%,transparent_80%)] z-0"
      />

      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 text-left">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-balance text-4xl md:text-7xl lg:mt-16 xl:text-[4rem] mb-6">
            Build your MVPs even faster with our platform
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground mb-8">
            Launch, iterate, and scale your ideas with lightning speed. Our
            platform provides all the tools you need to turn your vision into
            reality—no matter your team size or experience level.
          </p>
          <Link
            href="#get-started"
            className="group inline-flex items-center justify-center gap-1 underline underline-offset-2 hover:scale-105 transition ease-linear duration-100"
          >
            Get Started Now <ArrowRight className="size-4" />
          </Link>
        </div>
        {/* Right: Feature Cards */}
        <div className="flex-1 w-full grid grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-1">
          <div className="flex flex-col gap-8">
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
              <Rocket className="h-10 w-10 text-black mb-4 dark:text-white" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Instant Launch
              </h3>
              <p className="text-muted-foreground">
                Deploy your MVP in minutes, not weeks. Our infrastructure is
                ready when you are.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
              <Zap className="h-10 w-10 text-black mb-4 dark:text-white" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Supercharged Features
              </h3>
              <p className="text-muted-foreground">
                Access a suite of pre-built components and integrations to
                accelerate your workflow.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
              <Layers className="h-10 w-10 text-black mb-4 dark:text-white" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Effortless Scaling
              </h3>
              <p className="text-muted-foreground">
                Grow from MVP to production without changing platforms. Scale
                seamlessly as you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MvpPromoSection;
