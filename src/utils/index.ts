import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatDate = (isoDate: string): string =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);

export const cleanHTML = (html: string): string =>
  html.replace(/<[^>]+>/g, "").trim();

export const truncateText = (text: string, maxLength: number): string =>
  text.length > maxLength ? `${text.substring(0, maxLength - 3)}...` : text;

export const slugify = (text?: string): string | undefined =>
  !text?.trim()
    ? undefined
    : text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

const normalizeRichTextWhitespace = (text: string): string =>
  text.replace(/\s+/g, " ").trim();

export const extractTextFromRichText = (node: any): string => {
  if (!node) return "";

  if (Array.isArray(node)) {
    return normalizeRichTextWhitespace(
      node.map(extractTextFromRichText).filter(Boolean).join(" "),
    );
  }

  if (typeof node.text === "string") {
    return node.text;
  }

  const nestedText = [
    extractTextFromRichText(node.root),
    extractTextFromRichText(node.children),
  ]
    .filter(Boolean)
    .join(" ");

  return normalizeRichTextWhitespace(nestedText);
};

export const getExcerpt = (content: string, wordLimit: number) => {
  const normalizedContent = content.trim().replace(/\s+/g, " ");
  const words = normalizedContent.split(" ");

  if (words.length <= wordLimit) {
    return normalizedContent;
  }

  return `${words.slice(0, wordLimit).join(" ")}...`;
};
