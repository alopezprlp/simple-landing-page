import { cn } from "@/utils/classes";
import { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}
const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("container mx-auto px-5 md:px-24 lg:px-32 mt-20 mb-20 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
