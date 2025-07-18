import DocumentationPage from "@/components/documentation/documentation-component";
import docData from "@/db/ubuntu-installation.json";
import React from "react";

function page() {
  return (
    <div>
      <DocumentationPage jsonData={docData} />
    </div>
  );
}

export default page;
