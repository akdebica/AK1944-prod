import type { ComponentProps } from "react";
import { cn } from "@/utils";

const textareaVariants = {
  primary:
    "text-greenMain ring-border placeholder:text-border focus:ring-greenMain",
  error: "text-redMain ring-redError placeholder:text-redError",
} as const;

const commonTextareaStyles =
  "block w-full rounded-md border-0 bg-white px-3 py-2 ring-1 ring-inset outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-inset sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical min-h-[120px]";

export type TextareaProps = ComponentProps<"textarea"> & {
  color?: keyof typeof textareaVariants;
};

export const Textarea = ({
  color = "primary",
  className,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
      className={cn(commonTextareaStyles, textareaVariants[color], className)}
      {...rest}
    />
  );
};
