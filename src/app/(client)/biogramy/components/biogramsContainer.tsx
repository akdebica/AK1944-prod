"use client";
import type { Biogram } from "@/payload-types";
import { SearchBar } from "./searchBar";
import { BiogramsList } from "./biogramsList";
import { useFilteredBiograms } from "../hooks/useFilteredBiograms";
import { Pagination } from "@/components/shared/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

type BiogramsContainerProps = {
  biograms: Biogram[];
};

export const BiogramsContainer = ({ biograms }: BiogramsContainerProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { searchQuery, paginatedBiograms, totalPages, handleSearch } =
    useFilteredBiograms(biograms, currentPage);

  const onSearch = (query: string) => {
    handleSearch(query);
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full">
      <SearchBar searchQuery={searchQuery} onSearch={onSearch} />

      {paginatedBiograms.length > 0 ? (
        <div>
          <BiogramsList people={paginatedBiograms} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      ) : (
        searchQuery && (
          <div className="text-gray-500 py-8 text-center">
            <p>Brak wyników dla &ldquo;{searchQuery}&rdquo;</p>
          </div>
        )
      )}
    </div>
  );
};
