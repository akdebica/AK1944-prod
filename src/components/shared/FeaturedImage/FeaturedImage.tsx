import Image, { type ImageProps } from "next/image";
import { type Media } from "@/payload-types";
import { DEFAULT_IMAGE } from "@/utils/constants";

interface FeaturedImageProps extends Omit<ImageProps, "src" | "alt"> {
  featuredImage?: string | null | Media;
  fallbackAlt: string;
}

export const FeaturedImage = ({
  featuredImage,
  fallbackAlt,
  ...props
}: FeaturedImageProps) => {
  const media =
    featuredImage && typeof featuredImage === "object" ? featuredImage : null;

  return (
    <Image
      src={media?.url || DEFAULT_IMAGE}
      alt={media?.alt || fallbackAlt}
      {...props}
    />
  );
};
