"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Menu, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface ContentBlock {
  type: string;
  id?: string;
  level?: number;
  text?: string;
  language?: string;
  code?: string;
  src?: string;
  alt?: string;
}

interface Credits {
  author: string;
  contributors: string[];
}

interface DocData {
  sidebar: NavItem[];
  toc: TocItem[];
  content: ContentBlock[];
  credits?: Credits;
}

interface DocumentationPageProps {
  jsonData: DocData;
}

const SidebarNav = ({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openItems.includes(item.title);

    return (
      <div key={item.title} className="w-full">
        <div
          className={`flex items-center justify-between w-full px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer ${
            level > 0 ? "ml-4" : ""
          }`}
          onClick={() => (hasChildren ? toggleItem(item.title) : undefined)}
        >
          <span className="text-foreground/80 hover:text-foreground">
            {item.title}
          </span>
          {hasChildren &&
            (isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            ))}
        </div>
        {hasChildren && isOpen && (
          <div className="mt-1 space-y-1">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={className}>
      <div className="space-y-1">
        {items.map((item) => renderNavItem(item))}
      </div>
    </nav>
  );
};

const TableOfContents = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-foreground">On This Page</h4>
      <nav className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`flex items-center w-full text-left text-sm py-1 px-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
              activeId === item.id
                ? "text-foreground bg-accent"
                : "text-muted-foreground"
            } ${item.level && item.level > 1 ? "ml-4" : ""}`}
          >
            <Hash className="h-3 w-3 mr-1 opacity-50" />
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

const renderContentBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case "heading": {
      if (!block.id || !block.level) return null;
      const tag = `h${block.level}`;
      return React.createElement(
        tag,
        {
          key: block.id,
          id: block.id,
          className:
            block.level === 1
              ? "text-4xl font-bold text-foreground mt-8 mb-4"
              : block.level === 2
              ? "text-2xl font-semibold text-foreground mt-6 mb-3"
              : "text-xl font-semibold text-foreground mt-4 mb-2",
        },
        block.text
      );
    }
    case "paragraph":
      return (
        <p key={idx} className="text-lg text-muted-foreground mb-4">
          {block.text}
        </p>
      );
    case "code":
      return (
        <div key={idx} className="bg-muted p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "image":
      return (
        <div key={idx} className="flex justify-center my-6">
          <img
            src={block.src}
            alt={block.alt || "Documentation image"}
            className="max-w-full rounded shadow"
          />
        </div>
      );
    default:
      return null;
  }
};

const DocumentationPage = ({ jsonData }: DocumentationPageProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-40 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                Documentation
              </h2>
            </div>
            <ScrollArea className="h-[calc(100vh-80px)] p-4">
              <SidebarNav items={jsonData.sidebar} />
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 lg:border-r lg:border-border lg:bg-background pt-20"> {/* Added pt-20 to avoid navbar overlap */}
          <div className="flex items-center h-16 px-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">
              Documentation
            </h2>
          </div>
          <ScrollArea className="flex-1 p-6">
            <SidebarNav items={jsonData.sidebar} />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="flex">
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="px-4 py-8 lg:px-8 lg:py-12">
                <div className="lg:pr-80">
                  {jsonData.content.map((block, idx) =>
                    renderContentBlock(block, idx)
                  )}
                  {jsonData.credits && (
                    <div className="mt-12 text-sm text-muted-foreground">
                      <Separator className="my-4" />
                      <div>Author: {jsonData.credits.author}</div>
                      <div>
                        Contributors: {jsonData.credits.contributors.join(", ")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <aside className="hidden xl:block xl:w-80 xl:fixed xl:right-0 xl:top-0 xl:h-full xl:border-l xl:border-border xl:bg-background">
              <div className="p-6 pt-16">
                <ScrollArea className="h-[calc(100vh-4rem)]">
                  <TableOfContents items={jsonData.toc} />
                </ScrollArea>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
