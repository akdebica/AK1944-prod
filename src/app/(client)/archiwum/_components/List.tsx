import { Card } from "@/app/(client)/archiwum/_components/Card";
import type { News } from "@/payload-types";

export const List = ({ data }: { data: News[] }) => {
  return (
    <ul className="flex flex-col items-center gap-10">
      {data.map((newsItem) => (
        <Card key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
};
