"use client";
import Link from "next/link";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import FlagsBtn from "./FlagsBtn";
import { cn } from "@/utils/classes";
import { Menu, XIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

interface IHeader extends HTMLAttributes<HTMLDivElement> {}
const Header: FC<IHeader> = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [showMobileHeader, setShowMobileHeader] = useState<boolean>(false);
  const t = useTranslations("Navigation");

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const doc = event.target as Document;
      const scroll = doc.scrollingElement?.scrollTop
        ? doc.scrollingElement?.scrollTop
        : 0;

      if (scroll > 100 && !showHeader) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed mx-auto z-50 bg-white left-[50%] translate-x-[-50%] shadow-lg transition-all delay-150 ease-in-out",
        !showHeader ? "top-7" : "top-0",
        !showHeader ? "w-[95%] " : "w-full",
        !showHeader ? "rounded-lg" : "rounded-none"
      )}
    >
      <div className="container mx-auto px-5 lg:px-16 py-5 flex flex-row justify-between items-center">
        <div className="text-white lg:hidden w-full flex justify-start">
          <span className="tetx-2xl font-extrabold text-black">LOGO</span>
        </div>
        <nav className="uppercase text-[16px] font-normal leading-[21.68px] translate-y-[4px] hidden lg:block">
          <Link href="#" className="mr-10 font-bold text-[#2E53A3]">
            {t("Home")}
          </Link>
          <Link href="#" className="mr-10">
            {t("Services")}
          </Link>
          <Link href="#" className="mr-10">
            {t("About")}
          </Link>
          <Link href="#" className="mr-10">
            {t("Tools")}
          </Link>
          <Link href="#" className="mr-10">
            {t("Partners")}
          </Link>
        </nav>
        <div className=" flex-row justify-end lg:justify-center items-center hidden lg:flex">
          <Button className="mr-5">Contactar</Button>
          <FlagsBtn />
        </div>
        <div className="text-white lg:hidden w-full flex justify-end">
          <button className="mr-2 focus:outline-none text-black">
            <Menu size={30} onClick={() => setShowMobileHeader((e) => !e)} />
          </button>
        </div>
      </div>
      <div
        className={cn(
          "w-full h-screen absolute top-0 left-0 bg-[#001853] transition-all delay-100 ease-in-out lg:hidden",
          showMobileHeader ? "translate-x-0" : "translate-x-[1000px]"
        )}
      >
        <div className="w-full flex justify-end p-6 text-white">
          <XIcon size={40} onClick={() => setShowMobileHeader((e) => !e)} />
        </div>
        <div className="grid grid-cols-1 divide-y">
          <div className="w-full h-12 text-center flex justify-center p-6 mb-10">
            <Link href="#" className="uppercase font-bold text-white text-2xl">
              {t("Home")}
            </Link>
          </div>
          <div className="w-full h-12 text-center flex justify-center p-6 mb-10">
            <Link href="#" className="uppercase font-bold text-white text-2xl">
              {t("Services")}
            </Link>
          </div>
          <div className="w-full h-12 text-center flex justify-center p-6 mb-10">
            <Link href="#" className="uppercase font-bold text-white text-2xl">
              {t("About")}
            </Link>
          </div>
          <div className="w-full h-12 text-center flex justify-center p-6 mb-10">
            <Link href="#" className="uppercase font-bold text-white text-2xl">
              {t("Tools")}
            </Link>
          </div>
          <div className="w-full h-12 text-center flex justify-center p-6 mb-10">
            <Link href="#" className="uppercase font-bold text-white text-2xl">
              {t("Partners")}
            </Link>
          </div>
          <div className="w-full h-12 text-center flex flex-col justify-center items-center p-6 mb-10">
            <FlagsBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
