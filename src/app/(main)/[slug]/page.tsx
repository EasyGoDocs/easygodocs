import DocumentationPage from "@/components/documentation/documentation-component";
import { dbFiles } from "@/db/export-json/index";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = dbFiles.find((doc) => doc.id === slug);

  console.log(slug);

  if (!doc) {
    return <div>Document not found</div>;
  }
  return (
    <div>
      <DocumentationPage jsonData={doc} />
    </div>
  );
}
