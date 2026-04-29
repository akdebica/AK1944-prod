import { Card } from "@/app/(client)/historia/literatura/_components/Card";
import type { Literature } from "@/payload-types";

export const List = ({ data }: { data: Literature[] }) => (
  <ul className="flex flex-col items-center gap-10">
    {data.map((book) => (
      <Card key={book.id} book={book} />
    ))}
  </ul>
);
