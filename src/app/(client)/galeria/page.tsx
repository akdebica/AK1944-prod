import { Gallery } from "@/components/Gallery/Gallery";
import { mockGalleries } from "@/components/Gallery/data/galleryData";
import { SearchParamsProps } from "@/types";
import React, { Suspense } from "react";

export default function GalleryPage({ searchParams }: SearchParamsProps) {
  const params = React.use(searchParams);
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  return (
    <Suspense fallback={<p>Ładowanie galerii...</p>}>
      <Gallery
        title="Galeria zdjęć"
        galleries={mockGalleries}
        currentPage={currentPage}
      />
    </Suspense>
  );
}
