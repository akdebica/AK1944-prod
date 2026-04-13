import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";

export interface BackgroundImageProps extends Omit<ImageProps, "alt"> {
  children?: React.ReactNode;
  alt: string;
  src: string;
  className?: string;
}

export const BackgroundImage = ({
  children,
  src,
  alt,
  sizes,
  className,
  ...props
}: BackgroundImageProps) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes ?? "100vw"}
        quality={80}
        className={cn("z-0 object-cover", className)}
        {...props}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
