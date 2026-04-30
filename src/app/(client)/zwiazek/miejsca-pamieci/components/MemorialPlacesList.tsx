import { MemorialPlace } from "@/components/MemorialPlace/MemorialPlace";
import { Pagination } from "@/components/shared/Pagination";
import { getMemorialPlaces } from "@/dataAccess/memorialPlaces";
import { PageProps } from "@/types";

const ITEMS_PER_PAGE = 4;

export default async function MemorialPlacesList({ currentPage }: PageProps) {
  const { places, totalPages } = await getMemorialPlaces({
    limit: ITEMS_PER_PAGE,
    page: currentPage,
    pagination: true,
  });

  return (
    <>
      <div className="mt-10 space-y-10">
        {places.map((miejsce) => (
          <MemorialPlace key={miejsce.slug} place={miejsce} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/zwiazek/miejsca-pamieci"
      />
    </>
  );
}
