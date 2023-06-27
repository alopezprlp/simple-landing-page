import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/classes";

const buttonVariants = cva(
  "flex items-center drop-shadow-lg-blue justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[#2D509E] rounded-[56px] text-white hover:bg-[#203a71]",
      },
      size: {
        default: "h-[49px] px-10 py-2",
        v1: "h-[55px] px-10 py-2 text-[18px] font-semibold leading-[32.53px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
