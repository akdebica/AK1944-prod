import type { PlaceDetails } from "@/types";

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

interface RichTextChild {
  text?: string;
  type?: string;
  [key: string]: unknown;
}

interface RichTextNode {
  children?: RichTextChild[];
  type?: string;
  [key: string]: unknown;
}

interface RichText {
  root?: {
    children?: RichTextNode[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

interface PayloadMedia {
  id: string;
  alt: string;
  url: string;
  filename: string;
}

interface PayloadHighlight {
  text: string;
  align: "left" | "center" | "right";
  id: string;
}

interface PayloadMemorialPlace {
  id: string;
  name: string;
  slug: string;
  location: string;
  description: RichText;
  featuredImage?: PayloadMedia;
  highlight?: PayloadHighlight[];
  descriptionContinuation?: RichText;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface PayloadResponse {
  docs: PayloadMemorialPlace[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

const extractTextFromRichText = (richText: RichText): string => {
  if (!richText || !richText.root || !richText.root.children) {
    return "";
  }
  
  return richText.root.children
    .map((node) => {
      if (node.children) {
        return node.children.map((child) => child.text || "").join("");
      }
      return "";
    })
    .join(" ");
};

const mapPayloadMemorialPlaceToPlaceDetails = (place: PayloadMemorialPlace): PlaceDetails => {
  const imageUrl = place.featuredImage
    ? place.featuredImage.url.startsWith('http')
      ? place.featuredImage.url
      : `${PAYLOAD_API_URL}${place.featuredImage.url}`
    : undefined;

  const highlight = place.highlight?.map((h) => ({
    text: h.text,
    align: h.align,
  }));

  return {
    id: parseInt(place.id, 10) || 0,
    slug: place.slug,
    name: place.name,
    location: place.location,
    description: extractTextFromRichText(place.description),
    image: imageUrl,
    highlight,
    descriptionContinuation: place.descriptionContinuation
      ? extractTextFromRichText(place.descriptionContinuation)
      : undefined,
  };
};

export const getMemorialPlaces = async (): Promise<PlaceDetails[]> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/memorial-places?limit=100&sort=-publishedAt`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch memorial places: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    return data.docs.map(mapPayloadMemorialPlaceToPlaceDetails);
  } catch (error) {
    console.error("Error fetching memorial places:", error);
    throw error;
  }
};

export const getMemorialPlaceBySlug = async (slug: string): Promise<PlaceDetails | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/memorial-places?where[slug][equals]=${slug}&limit=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch memorial place: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    if (data.docs.length === 0) {
      return null;
    }

    return mapPayloadMemorialPlaceToPlaceDetails(data.docs[0]);
  } catch (error) {
    console.error("Error fetching memorial place by slug:", error);
    throw error;
  }
};
