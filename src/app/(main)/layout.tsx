import type { ReactNode } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";

// Demo NavBar component for the documentation site
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: 'Home' },
    { name: 'About', url: '#', icon: 'User' },
    { name: 'Projects', url: '#', icon: 'Briefcase' },
    { name: 'Resume', url: '#', icon: 'FileText' }
  ];
  return <NavBar items={navItems} />;
}

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBarDemo />
      <main className="pt-20">{children}</main>
    </div>
  );
}

export default layout;
