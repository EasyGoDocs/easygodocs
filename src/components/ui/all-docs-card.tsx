import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardContent {
  id: string;
  title: string;
  desc: string;
  buttonTxt: string;
  icon?: React.ElementType;
  tip?: string;
  pro?: boolean;
  className?: string;
  tags?: string[];
}

function CardDocs({
  id,
  title,
  desc,
  buttonTxt,
  icon: Icon,
  tip,
  pro = false,
  className,
  tags = [],
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
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-2 py-1 text-xs rounded-full",
                  pro 
                    ? "bg-white/20 text-white" 
                    : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {tip && (
          <span className="text-xs text-muted-foreground mt-auto italic flex items-center justify-center gap-1">
            {tip}
          </span>
        )}
      </div>
      <CardFooter className="p-0 mt-6 w-full flex justify-end md:justify-center">
        <Link
          href={`/${id}`}
          className={cn(
            buttonVariants({
              className: "md:w-full",
            })
          )}
        >
          {buttonTxt}
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardDocs;
