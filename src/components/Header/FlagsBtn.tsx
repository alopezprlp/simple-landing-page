"use client";
import Image from "next/image";
import { ButtonHTMLAttributes, FC } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { useTransition } from "react";
import UkFlag from "@/assets/flagUk.png";
import SpainFlag from "@/assets/flagSpain.png";

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {}
const FlagsBtn: FC<IBtn> = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange() {
    startTransition(() => {
      if (locale === "en") return router.replace(`/es${pathname}`);
      return router.replace(`/en${pathname}`);
    });
  }

  return (
    <button
      disabled={isPending}
      className="w-[27px] h-[18px]"
      onClick={() => onSelectChange()}
    >
      <Image alt="h0" src={locale === "en" ? UkFlag : SpainFlag} priority />
    </button>
  );
};

export default FlagsBtn;
