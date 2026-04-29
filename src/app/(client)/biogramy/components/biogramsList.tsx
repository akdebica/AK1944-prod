import type { Biogram } from "@/payload-types";
import Link from "next/link";

export const BiogramsList = ({ people }: { people: Biogram[] }) => {
  return (
    <div className="relative mx-auto w-full max-w-md tablet:max-w-5xl">
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain tablet:block"
        style={{ left: "calc(100% - 440px - 1rem)" }}
      />
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain tablet:block"
        style={{ left: "calc(100% - 220px - 1rem)" }}
      />

      <div className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-2 pb-6 font-courier text-18 tablet:grid-cols-[1fr_220px_220px] tablet:gap-x-0">
        <div className="flex min-w-[120px] flex-wrap gap-2 text-left text-2xl font-bold">
          <span>L.p.</span>
          <span>Nazwisko i imię</span>
        </div>

        <div className="hidden justify-center text-2xl font-bold tablet:flex tablet:py-1">
          <p>Data urodzenia</p>
        </div>

        <div className="hidden justify-center text-2xl font-bold tablet:flex tablet:py-1">
          <p>Data śmierci</p>
        </div>
      </div>

      {people.map((person, index) => (
        <div
          key={person.id}
          className={`grid grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-2 font-courier text-18 font-bold contrast:text-black00 tablet:grid-cols-[1fr_220px_220px] tablet:gap-x-0 ${
            index % 2 === 0 ? "bg-greenLight" : "bg-backgroundB"
          }`}
        >
          <div className="flex min-w-[120px] gap-2">
            <span>{index + 1}.</span>

            <span className="tablet:hidden">{person.name}</span>

            <Link
              href={`/biogramy/${person.slug}`}
              className="hidden tablet:inline tablet:underline"
            >
              {person.name}
            </Link>
          </div>

          <Link
            href={`/biogramy/${person.slug}`}
            className="mr-4 text-xl tablet:hidden"
          >
            &rsaquo;
          </Link>

          <div className="hidden px-4 py-1 text-center tablet:block">
            {person.birthDate}
          </div>

          <div className="hidden py-1 pl-4 text-center tablet:block">
            {person.deathDate}
          </div>
        </div>
      ))}
    </div>
  );
};
