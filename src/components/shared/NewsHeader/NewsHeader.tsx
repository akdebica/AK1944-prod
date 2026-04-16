import { formatDate } from "@/utils";
import { Heading } from "../Heading/Heading";

export const NewsHeader = ({
  title,
  date,
}: {
  title: string;
  date?: string | null;
}) => {
  const safeDate = date ?? "";

  return (
    <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:gap-4">
      <Heading variant="h4" color="white" contrast="yellow" className="">
        {title}
      </Heading>
      <p className="font-sourceSans text-grayDate">
        <time dateTime={safeDate}>{date ? formatDate(date) : "Brak daty"}</time>
      </p>
    </div>
  );
};
