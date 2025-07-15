import React from "react";
import AIJson from "@/db/ai-introduction-db.json";

console.log(AIJson.title);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#1e293b] to-[#0f172a] text-white px-4">
      <header className="mb-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          EasyGoDocs
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-xl mx-auto font-light">
          Effortless, elegant, and powerful documentation for your Go projects.
        </p>
      </header>
      <main className="flex flex-col items-center gap-8">
        <a
          href="#get-started"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-colors shadow-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get Started
        </a>
        <div className="mt-8 max-w-2xl text-center text-blue-200 text-base font-normal">
          <span className="inline-block border-l-4 border-blue-500 pl-4 italic">
            &quot;Documentation should be as easy as writing code. EasyGoDocs
            makes it possible.&quot;
          </span>
        </div>
      </main>
      <footer className="mt-20 text-blue-400 text-xs opacity-70">
        &copy; {new Date().getFullYear()} EasyGoDocs. All rights reserved.
      </footer>
    </div>
  );
}
