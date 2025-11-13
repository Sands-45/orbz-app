/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Link as RouterLink } from "react-router";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        native: "text-primary underline hover:text-primary/90",
        outline:
          "border border-input bg-background hover:opacity-80 hover:text-accent-foreground text-zinc-700 dark:text-zinc-200",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  href: string;
  state?: unknown;
  compact?: boolean;
  disabled?: boolean;
  replace?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      state,
      compact,
      disabled,
      replace = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : RouterLink;
    return (
      <Comp
        className={cn(
          linkVariants({ variant, size }),
          {
            "text-[11px] font-semibold antialiased h-8 w-20": compact,
          },
          className,
          {
            "opacity-80 pointer-events-none": disabled,
          }
        )}
        ref={ref}
        to={href}
        state={state}
        replace={replace}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link, linkVariants };
