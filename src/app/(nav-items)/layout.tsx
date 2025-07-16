import { Footer } from "@/components/page-components/footer-section";
import { HeroHeader } from "@/components/ui/header";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroHeader />
      {children}
      <Footer />
    </>
  );
}

export default layout;
