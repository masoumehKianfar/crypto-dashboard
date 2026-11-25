import * as React from "react";

import { cn } from "@/shadcn/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border rounded-lg text-caption px-4 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-light-black dark:placeholder:text-dark-gray-light placeholder:text-light-primary-dark focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-light disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm   border-light-primary-light dark:bg-dark-primary-dark  bg-light-gray-dark dark:file:text-dark-white dark:focus-visible:ring-dark-gray-light focus-visible:ring-light-primary-light/70",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
