import { Button } from "@/components/shared/Button/Button";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";
import type { Literature } from "@/payload-types";

export const Card = ({ book }: { book: Literature }) => (
  <li className="flex flex-col items-center gap-4 border-b-4 border-greenLight pb-10 last:border-b-0 tablet:flex-row tablet:items-stretch tablet:gap-10">
    <div className="relative flex aspect-square w-72 items-center justify-center">
      <FeaturedImage
        featuredImage={book.coverImage}
        fallbackAlt={`Okładka książki ${book.title} autorstwa ${book.author}`}
        fill
      />
    </div>
    <div className="flex flex-col items-center gap-4 tablet:w-3/4 tablet:items-end tablet:justify-between tablet:gap-0 tablet:self-stretch">
      <div className="flex flex-col items-center gap-2 text-start tablet:items-start tablet:gap-4 desktop:gap-6">
        <h2 className="font-lora text-28 font-bold leading-none tablet:text-32">
          {book.title} - {book.author}
        </h2>
        <p className="tablet:text-18">{book.aboutAuthor}</p>
      </div>
      <Button
        variant="secondary"
        href={`/historia/literatura/${book.slug}`}
        label="Czytaj dalej"
        ariaDescription="Czytaj dalej"
      >
        Czytaj dalej
      </Button>
    </div>
  </li>
);
