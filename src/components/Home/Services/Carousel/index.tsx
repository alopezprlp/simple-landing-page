"use client";
import React, { FC, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import Ico1 from "@/assets/s-1.svg";
import Ico1A from "@/assets/s-1-active.svg";
import Ico2 from "@/assets/s-2.svg";
import Ico2A from "@/assets/s-2-active.svg";
import Ico3 from "@/assets/s-3.svg";
import Ico3A from "@/assets/s-3-active.svg";
import aleft from "@/assets/c-arrow-left.svg";
import aright from "@/assets/c-arrow-right.svg";
import acr from "@/assets/arrow-more-r.svg";
import { cn } from "@/utils/classes";
import Link from "next/link";
import { useViewport } from "@/hooks/useViewport";
import { DataType, useGlobalContext } from "@/context/store";
import { useMounted } from "@/hooks/useMounted";

interface ICarousel {
  data: DataType[];
}
const Carousel: FC<ICarousel> = ({ data }) => {
  const { isMobile } = useViewport();
  const [normalizeData, setNormalizeData] = useState<DataType[]>([]);
  const { setData } = useGlobalContext();
  const mounted = useMounted();

  useEffect(() => {
    if (!data) return;

    setData(data);
    const normalize = data.map((item) => {
      if (item.icon === "mobile")
        return { ...item, icon: Ico1, iconActive: Ico1A };
      if (item.icon === "data_config")
        return { ...item, icon: Ico2, iconActive: Ico2A };
      if (item.icon === "config")
        return { ...item, icon: Ico3, iconActive: Ico3A };

      return { ...item, icon: Ico1, iconActive: Ico1A };
    });
    setNormalizeData([...normalize]);
  }, [data]);

  if (!mounted) return null;
  return (
    <div className="relative">
      <Swiper
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          type: "bullets",
        }}
        navigation={
          !isMobile
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={35}
        loop
        autoplay={{
          delay: 4000,
        }}
        modules={
          isMobile ? [Pagination, Autoplay] : [Pagination, Autoplay, Navigation]
        }
        className="w-full h-[366px] flex flex-row justify-center items-center mySwiper"
      >
        {normalizeData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              padding: "2px",
            }}
          >
            {({ isActive }) => (
              <div
                className={cn(
                  "w-full md:max-w-[286px] max-h-[366] h-full p-6 transition-all delay-100 ease-in-out",
                  isActive ? "bg-[#2E53A3]" : "text-white shadow-lg"
                )}
              >
                <Image
                  className=""
                  alt="arrow"
                  src={isActive ? item.iconActive : item.icon}
                />
                <h2
                  className={cn(
                    "font-semibold text-[16px] lg:text-[15px] xl:text-[18px] 2xl:text-[22px] leading-[27.4px] mt-5",
                    isActive ? "text-white" : "text-[#0F0F0F]"
                  )}
                >
                  {item.title}
                </h2>
                <p
                  className={cn(
                    "font-normal text-[14px] leading-[17px] mt-5 mb-3 line-clamp-5 lg:line-clamp-3 xl:line-clamp-5",
                    isActive ? "text-white" : "text-[#0F0F0F]"
                  )}
                >
                  {item.description}
                </p>
                {isActive && (
                  <Link
                    href={`/service/${item.id}`}
                    className={
                      "font-semibold text-[20px] leading-[30px] text-white flex justify-start items-center"
                    }
                  >
                    Leer más
                    <Image className="ml-3 text-white" alt="arrow" src={acr} />
                  </Link>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next absolute bottom-[50%] -left-32 md:-left-7 cursor-pointer hidden md:block">
        <Image className="" alt="carrowl" src={aleft} />
      </div>
      <div className="swiper-button-prev absolute -right-32 md:-right-7 2xl:-right-4 bottom-[50%] cursor-pointer  hidden md:block">
        <Image className="" alt="carrowl" src={aright} />
      </div>
      <div className="custom-pagination "></div>
    </div>
  );
};

export default Carousel;
