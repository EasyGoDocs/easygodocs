import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateString(str: string) {
  if (!str) return "";

  const slicedStr = `${str.slice(0, 60)}...`;

  return slicedStr;
}
