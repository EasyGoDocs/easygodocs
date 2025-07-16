import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";

interface CardContent {
  title: string;
  desc: string;
  buttonTxt: string;
}

function CardDocs({ title, desc, buttonTxt }: CardContent) {
  return (
    <>
      <Card className="h-full">
        <CardHeader>{title}</CardHeader>
        <CardContent>{desc}</CardContent>
        <CardFooter>
          <Button>{buttonTxt}</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CardDocs;
