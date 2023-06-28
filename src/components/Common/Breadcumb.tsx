import React, { FC, HTMLAttributes } from "react";
import imgbackNumeric from "@/assets/background-hero.webp";
import Image from "next/image";
import Link from "next/link";

interface iBreadCumb extends HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
}
const Breadcumb: FC<iBreadCumb> = ({ title, category }) => {
  return (
    <div className="relative w-full h-[25rem] bg-[#001853] pt-24 flex flex-col justify-center items-center content-center">
      <Image
        alt="img"
        src={imgbackNumeric}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="relative text-white">
        <div className="flex content-center items-center space-x-2">
          <Link href="/" className={`font-bold text-white hover:text-[#E5745D]`}>
            HOME
          </Link>
          <span className="text-white">:</span>
          <Link
            href={"/"}
            className={`font-bold text-white`}
          >
            {category}
          </Link>
          <span className="text-white">:</span>

          <Link
            href={"/"}
            className={`font-bold text-white hover:text-[#E5745D]`}
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
