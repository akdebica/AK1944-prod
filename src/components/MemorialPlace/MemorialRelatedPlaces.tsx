import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/shared/Heading/Heading";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";
import type { Media } from "@/payload-types";

export async function MemorialRelatedPlaces({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const { docs: places } = await fetchCollection({
    collection: "memorial-places",
    query: {
      limit: 100,
      pagination: false,
    },
  });

  const filteredPlaces = places.filter((place) => place.slug !== currentSlug);
  const randomPlaces = [...filteredPlaces]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (randomPlaces.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 pt-14">
      <Heading
        variant="h2"
        contrast="yellow"
        color="green"
        className="mb-10 text-2xl font-bold"
      >
        Inne miejsca pamięci:
      </Heading>
      <div className="mx-auto grid w-[90%] grid-cols-1 items-center tablet:grid-cols-3">
        {randomPlaces.map((place) => {
          const imageUrl =
            place.featuredImage && typeof place.featuredImage === "object"
              ? ((place.featuredImage as Media).url ??
                "/images/placeholder_image.webp")
              : "/images/placeholder_image.webp";

          return (
            <Link
              key={place.slug}
              href={`/zwiazek/miejsca-pamieci/${place.slug}`}
              aria-label={`Przejdź do szczegółów miejsca: ${place.name}`}
              className="flex flex-col items-center gap-4 transition hover:opacity-80"
            >
              <Image
                src={imageUrl}
                alt={place.name || ""}
                width={300}
                height={200}
                className="rounded-desktop w-full max-w-[350px] object-cover"
              />
              <h3 className="text-center font-lora font-bold text-textDarkGreen">
                {place.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
