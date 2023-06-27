import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import imgbackNumeric from "@/assets/background-hero.webp";
import hero0 from "@/assets/img-hero-0.png";
import polygon from "@/assets/polygon.png";

interface IHero extends HTMLAttributes<HTMLDivElement> {}
const Hero: FC<IHero> = () => {
  return (
    <div className="w-full h-screen bg-[#001853] flex flex-row justify-center items-center relative">
      <Image
        alt="imgBackground"
        src={imgbackNumeric}
        quality={100}
        className="absolute"
        sizes="100vw"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />

      <div className="container mx-auto flex flex-col lg:flex-row justify-evenly gap-8 pl-5 pr-5 lg:pr-0 lg:pl-20 md:pt-32 lg:pt-32 xl:pt-64">
        <div className="lg:w-[100%] xl:w-[60%]">
          <h1 className="text-[54px] md:text-[64px] font-extrabold leading-[77.45px] text-white w-full xl:w-[73%]">
            Es tiempo de maquetar
          </h1>
          <p className="text-white font-normal text-[18px] md:text-[20px] leading-[27.1px] mt-10">
            Debes usar <strong className="font-bold">NextJS</strong> y{" "}
            <strong className="font-bold">Tailwind CSS</strong> . Cada sección
            de la página debe ser un componente individual. Usa el módulo
            next-intl para internacionalización. Usa la imaginación para
            desarrollar el responsive de la versión móvil.
          </p>
        </div>
        <div className="hidden md:block">
          <Image alt="h0" src={hero0} priority />
        </div>
      </div>

      <div className="w-[100px] h-[100px] absolute bottom-[-4.5rem] left-[25%]">
        <Image alt="h0" src={polygon} priority />
      </div>
    </div>
  );
};

export default Hero;
