"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { CommandPalette } from "@/components/ui/command-palette";

const menuItems = [
  { name: "Features", href: "/features" },
  { name: "Solution", href: "/sollution" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const Logo = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
  <span className={cn("flex items-center gap-2", className)}>
    <img
        src={isDark ? "/easygodocs-logo-dark.svg" : "/easygodocs-logo.svg"}
      alt="EasyGoDocs logo"
      width={40}
      height={40}
        className={cn("rounded-full p-1", !isDark && "bg-white")}
      style={{ display: "block" }}
    />
    <span className="text-balance font-semibold">EasyGoDocs.</span>
  </span>
);
};

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions - Right */}
            <div className="hidden lg:flex items-center gap-2">
              <div className={cn("transition-all duration-300", isScrolled ? "scale-90" : "")}>
                <CommandPalette />
              </div>
              <Link href="https://github.com/EasyGoDocs/easygodocs.git" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <FaGithub className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <FaXTwitter className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              </Link>
              <DarkModeToggle />
              <Button asChild size="sm" className="ml-1">
                <Link href="/all-docs">All Docs</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 block cursor-pointer p-2 lg:hidden"
            >
              <Menu className="group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 size-6 duration-200" />
              <X className="group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200" />
            </button>

            {/* Mobile Menu */}
            <div className="group-data-[state=active]:block lg:hidden absolute top-full left-0 right-0 mt-2 hidden bg-background rounded-2xl border p-6 shadow-2xl">
              <div className="space-y-6">
                <CommandPalette />
                
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block py-2 duration-150"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Link href="https://github.com/EasyGoDocs/easygodocs.git" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                      <FaGithub className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </Link>
                    <Link href="https://twitter.com/" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                      <FaXTwitter className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </Link>
                    <DarkModeToggle />
                  </div>
                  <Button asChild size="sm">
                    <Link href="/all-docs" onClick={() => setMenuState(false)}>All Docs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
