import { Card } from "@/app/(client)/archiwum/_components/Card";
import type { NewsItemData } from "@/app/(client)/archiwum/_components/data";

interface ListProps {
  data: NewsItemData[];
}

export const List = ({ data }: ListProps) => {
  return (
    <ul className="flex flex-col items-center gap-10">
      {data.map((newsItem) => (
        <Card key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
};
