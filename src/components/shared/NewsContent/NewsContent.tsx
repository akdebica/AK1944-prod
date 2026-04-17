import type { News } from "@/payload-types";
import { extractTextFromRichText, getExcerpt } from "@/utils";
import Link from "next/link";

export const NewsContent = ({
  content,
  slug,
  title,
}: {
  content: News["content"];
  slug: string;
  title: string;
}) => {
  const EXCERPT_WORD_LIMIT = 20;
  const extractedText = extractTextFromRichText(content);
  const shortContent = getExcerpt(extractedText, EXCERPT_WORD_LIMIT);

  return (
    <div className="font-sourceSans text-textLight">
      <p>{shortContent}</p>
      <Link
        href={`/archiwum/${slug}`}
        aria-label={`Czytaj więcej o aktualności: ${title}`}
        className="text-textLightGreen underline tablet:col-start-2 tablet:row-start-2"
      >
        czytaj więcej.
      </Link>
    </div>
  );
};
