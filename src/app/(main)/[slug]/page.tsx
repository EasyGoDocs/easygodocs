import DocumentationPage from "@/components/documentation/documentation-component";
import { dbFiles } from "@/db/export-json/index";
import React from "react";

function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const doc = dbFiles.find((doc) => doc.id === slug);
  if (!doc) {
    return <div>Document not found</div>;
  }
  return (
    <div>
      <DocumentationPage jsonData={doc} />
    </div>
  );
}

export default page;
