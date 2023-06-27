"use client";
import { useGlobalContext } from "@/context/store";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";

interface IServicesAbout extends HTMLAttributes<HTMLDivElement> {}
const ServicesAbout: FC<IServicesAbout> = () => {
  const { data } = useGlobalContext();
  const t = useTranslations("Services");
  return (
    <div className="w-full text-left lg:text-end">
      <h4 className="uppercase font-bold text-[20px] leading-[27.1px] text-[#3A67CC] ">
        Servicios
      </h4>
      <h2 className="font-semibold text-[36px] leading-[44.83px] text-[#0F0F0F] mt-6">
        {t("title")}
      </h2>
      <p className="font-light text-[18px] leading-[25.65px] mt-6 mb-6 w-full  ">
        Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
        la arquitectura de componentes de React. Debe tener buena atención al
        detalle, organización del código, habilidades de comunicación efectiva y
        capacidad para trabajar en equipo.
      </p>
      <h5 className="font-bold text-[22px] leading-[27.4px] text-[#606060] mt-6 mb-5">
        Usa Context para acceder a los títulos de abajo desde la sección
        anterior
      </h5>
      <ul className="list-none space-y-5">
        {data.map((e, inx) => (
          <li
            key={inx}
            className="flex flex-row-reverse lg:flex-row  justify-end items-center "
          >
            <span className="font-medium text-[16px] leading-[16.92px] text-[#606060] mr-0 lg:mr-4 ml-4 lg:ml-0">
              {e.title}
            </span>
            <span className="w-[19px] h-[19px] min-w-[19px] rounded-full bg-white border-2 border-[#3D93FF] relative after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:bg-[#3D93FF] after:rounded-full after:left-[50%] after:-translate-x-[2.4px] after:translate-y-[0.34rem]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesAbout;
