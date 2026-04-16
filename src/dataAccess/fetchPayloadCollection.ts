import { getPayload } from "payload";
import config from "@payload-config";
import type { News } from "@/payload-types";

type FetchResult<T> = {
  docs: T[];
  error: string | null;
};

type CollectionMap = {
  news: News;
};

type findArgs = Parameters<typeof getPayload>["find"];

export async function fetchCollection<K extends keyof CollectionMap>({
  collection,
  query = {},
}: {
  collection: K;
  query?: Omit<findArgs, "collection">;
}): Promise<FetchResult<CollectionMap[K]>> {
  try {
    const payload = await getPayload({ config });

    const res = await payload.find({
      collection,
      ...query,
    });

    return {
      docs: res.docs as CollectionMap[K][],
      error: null,
    };
  } catch (error) {
    console.error(`Failed to fetch ${collection}`, error);

    return {
      docs: [],
      error: "Błąd podczas pobierania danych.",
    };
  }
}

export async function fetchBySlug<K extends keyof CollectionMap>(
  collection: K,
  slug: string,
) {
  const { docs, error } = await fetchCollection({
    collection,
    query: {
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    },
  });

  return {
    doc: docs[0] ?? null,
    error,
  };
}
