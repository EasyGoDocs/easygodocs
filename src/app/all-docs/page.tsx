"use client"
import React from "react";
import { useState } from "react";
import { BookOpen, Lock, Server, Rocket, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
  {
    title: "Getting Started",
    description: "Learn how to quickly set up and use EasyGoDocs for your Go projects.",
    icon: BookOpen,
    href: "/docs/getting-started",
  },
  {
    title: "API Reference",
    description: "Comprehensive API documentation for all available endpoints and features.",
    icon: FileText,
    href: "/docs/api",
  },
  {
    title: "Authentication",
    description: "Understand authentication flows and how to secure your documentation.",
    icon: Lock,
    href: "/docs/authentication",
  },
  {
    title: "Deployment",
    description: "Best practices and guides for deploying your documentation site.",
    icon: Rocket,
    href: "/docs/deployment",
  },
  {
    title: "Server Setup",
    description: "How to configure and run your own EasyGoDocs server.",
    icon: Server,
    href: "/docs/server-setup",
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const filteredDocs = docs.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase()) ||
    doc.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen w-full bg-white py-16 px-2">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-2 text-left">
          All Documentation We Provide
        </h1>
        <p className="text-zinc-600 mb-8 text-lg font-light max-w-2xl">
          Explore our comprehensive guides and references to help you master EasyGoDocs and integrate it seamlessly into your workflow.
        </p>
        {/* Search Bar */}
        <div className="mb-10 flex items-center max-w-md bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2 shadow focus-within:ring-2 ring-zinc-400">
          <Search className="text-zinc-500 mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
        {/* Docs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDocs.length === 0 && (
            <div className="col-span-full text-center text-zinc-400 py-12 text-lg">No documentation found.</div>
          )}
          {filteredDocs.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.href}
                className="group bg-zinc-50 border border-zinc-200 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-zinc-200 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-zinc-700 group-hover:text-black transition-colors" />
                  </span>
                  <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-black transition-colors">
                    {doc.title}
                  </h2>
                </div>
                <p className="text-zinc-600 mb-6 text-sm flex-1">{doc.description}</p>
                <Button asChild className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-800">
                  <a href={doc.href}>Read</a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
