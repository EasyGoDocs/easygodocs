import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CardContent {
  title: string;
  desc: string;
  buttonTxt: string;
  icon?: React.ElementType;
  tip?: string;
  pro?: boolean;
  className?: string;
}

function CardDocs({
  title,
  desc,
  buttonTxt,
  icon: Icon,
  tip,
  pro = false,
  className,
}: CardContent) {
  // Card style based on 'pro' prop
  const cardClass = pro
    ? "relative flex flex-col h-full justify-between rounded-2xl p-8 shadow-xl border transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-black from-10% via-fuchsia-600 via-50% to-lime-400 to-80% border-zinc-700"
    : "relative flex flex-col h-full justify-between bg-card/80 rounded-2xl p-8 shadow-lg border border-border items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl";

  return (
    <Card className={cn(cardClass, className)}>
      {Icon && (
        <Icon
          className={cn("h-10 w-10 text-primary mb-4", pro && "text-white")}
        />
      )}
      <div className="flex flex-col flex-1 w-full">
        <h2
          className={cn(
            "text-xl font-semibold text-foreground mb-2",
            pro && "text-white"
          )}
        >
          {title}
        </h2>
        <hr className="my-2" />
        <p
          className={cn("text-base mb-4", pro ? "text-white" : "text-zinc-500")}
        >
          {desc}
        </p>
        {tip && (
          <span className="text-xs text-muted-foreground mt-auto italic flex items-center justify-center gap-1">
            {tip}
          </span>
        )}
      </div>
      <CardFooter className="p-0 mt-6 w-full">
        <Button className="w-full py-2 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 dark:border">
          {buttonTxt}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardDocs;
