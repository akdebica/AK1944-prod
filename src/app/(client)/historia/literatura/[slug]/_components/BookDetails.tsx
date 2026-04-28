import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Literature } from "@/payload-types";

export const BookDetails = (book: Literature) => (
  <div className="flex flex-col items-start gap-6">
    <Heading variant="h3" contrast="yellow" color="green">
      Szczegóły wydania:
    </Heading>
    <ul className="flex flex-col gap-3 tablet:text-18 desktop:text-20">
      <li>Autor: {book.author}</li>
      <li>Wydawca: {book.publisher}</li>
      <li>ISBN: {book.isbn}</li>
      <li>Format: {book.format}</li>
      <li>Liczba stron: {book.numberOfPages}</li>
      <li>Oprawa: {book.cover}</li>
      <li>Wydanie: {book.edition}</li>
      <li>Język: {book.language}</li>
      <li className="relative flex aspect-square w-64 items-center justify-center">
        <FeaturedImage
          featuredImage={book.coverImage}
          fallbackAlt={`Okładka książki ${book.title} autorstwa ${book.author}`}
          fill
        />
      </li>
    </ul>
  </div>
);
