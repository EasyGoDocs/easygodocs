import type { ReactNode } from "react";
import React from "react";


// Demo NavBar component for the documentation site


function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      
      <main className="pt-20">{children}</main>
    </div>
  );
}

export default layout;
