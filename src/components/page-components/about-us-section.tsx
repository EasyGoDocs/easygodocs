"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutUsSection() {
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

      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16 text-left">
        {/* Left: Cards */}
        <div className="flex-1 w-full grid grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-1">
          <div className="flex flex-col gap-8">
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Why EasyGoDocs
              </h3>
              <p className="text-muted-foreground">
                Go developers deserve documentation that&apos;s as clean and
                straightforward as the language itself. We built EasyGoDocs to
                make docs effortless—no overcomplicated tooling, just simple,
                elegant output.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Community First
              </h3>
              <p className="text-muted-foreground">
                EasyGoDocs is open source and built by developers, for
                developers. We welcome contributions, feedback, and ideas from
                the Go community. Your docs, your way.
              </p>
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-balance text-4xl md:text-7xl lg:mt-16 xl:text-[4rem] mb-6">
            Built for Go, loved by developers
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground mb-8">
            EasyGoDocs is the documentation solution for Go projects that just
            works. Minimal setup, maximum clarity. Write once, publish everywhere—with
            a modern UI that your users will appreciate.
          </p>
          <Link
            href="/contribution-guide"
            className="group inline-flex items-center justify-center gap-1 underline underline-offset-2 hover:scale-105 transition ease-linear duration-100"
          >
            Contribute to EasyGoDocs <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
