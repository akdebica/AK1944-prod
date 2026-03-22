import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils";

export type CheckboxProps = ComponentProps<"input"> & {
  label: ReactNode;
  error?: boolean;
  lightMode?: boolean;
};

export const Checkbox = ({
  label,
  error = false,
  lightMode = false,
  className,
  id,
  ...rest
}: CheckboxProps) => {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={id}
        className={cn(
          "mt-1 size-4 shrink-0 cursor-pointer rounded border-2 text-greenMain transition-colors duration-200 focus:ring-2 focus:ring-offset-2",
          error
            ? "border-redError ring-redError"
            : lightMode
              ? "border-white ring-white bg-white"
              : "border-border ring-greenMain",
          lightMode && "focus:ring-white",
          className,
        )}
        {...rest}
      />
      <div className="flex-1">
        <p
          className={cn(
            "text-sm leading-6",
            error
              ? "text-redError"
              : lightMode
                ? "text-white"
                : "text-textDarkGreen",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
