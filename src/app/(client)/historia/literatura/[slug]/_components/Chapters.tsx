import { Heading } from "@/components/shared/Heading/Heading";
import type { Literature } from "@/payload-types";

export const Chapters = ({
  chapters,
}: {
  chapters: Literature["chapters"];
}) => (
  <div className="flex flex-col gap-6">
    <Heading variant="h3" contrast="yellow" color="green">
      Spis treści:
    </Heading>
    {chapters && (
      <ul className="list-decimal pl-6 tablet:text-18 desktop:text-20">
        {chapters.map((chapter) => (
          <li key={chapter.id} className="mb-2">
            {chapter.chapterTitle}
          </li>
        ))}
      </ul>
    )}
  </div>
);
