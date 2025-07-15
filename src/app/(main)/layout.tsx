import React, { ReactNode } from "react";

/* 
This file should have
- Header
- Sidebar
- Footer
*/

function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default layout;
