import { useState, useMemo } from "react";
import type { Biogram } from "@/payload-types";

const ITEMS_PER_PAGE = 30;

export const useFilteredBiograms = (
  biograms: Biogram[],
  currentPage: number = 1,
) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBiograms = useMemo(() => {
    if (!searchQuery.trim()) {
      return biograms;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return biograms.filter((biogram) =>
      biogram.name.toLowerCase().includes(lowerQuery),
    );
  }, [searchQuery, biograms]);

  const totalPages = Math.ceil(filteredBiograms.length / ITEMS_PER_PAGE);

  const paginatedBiograms = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredBiograms.slice(startIndex, endIndex);
  }, [filteredBiograms, currentPage]);

  return {
    searchQuery,
    paginatedBiograms,
    filteredBiograms,
    totalPages,
    handleSearch: setSearchQuery,
  };
};
