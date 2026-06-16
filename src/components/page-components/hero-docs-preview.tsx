"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

/**
 * A mock documentation preview for the hero section.
 * Mimics the EasyGoDocs documentation UI with Go code.
 */
export function HeroDocsPreview() {
  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden shadow-xl shadow-zinc-950/10 flex flex-col min-h-[280px] sm:min-h-[320px]">
      {/* Mock header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">
          docs/installation.mdx
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mock sidebar */}
        <aside className="hidden sm:flex w-48 flex-col border-r border-border bg-muted/20 p-3">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Documentation
          </div>
          <nav className="space-y-0.5 text-sm">
            {["Getting Started", "Installation", "Quick Start", "API Reference"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md ${
                    i === 1 ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i === 1 && <ChevronRight className="h-3 w-3 shrink-0" />}
                  <span className="truncate">{item}</span>
                </div>
              )
            )}
          </nav>
        </aside>

        {/* Mock content area with Go code */}
        <main className="flex-1 p-4 overflow-hidden">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">
              Installation
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Add EasyGoDocs to your Go project with a single command.
            </p>
            <div className="rounded-lg overflow-hidden border border-border bg-zinc-950/50 p-3 font-mono text-xs">
              <div className="text-zinc-500">$ go get github.com/your-org/easygodocs</div>
              <div className="text-emerald-400 mt-1">go: downloading github.com/your-org/easygodocs</div>
              <div className="text-zinc-400 mt-1">package github.com/your-org/easygodocs: added</div>
            </div>
            <p className="text-xs text-muted-foreground">
              Documentation made simple for Go developers.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
