import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { FC, HTMLAttributes, Suspense } from "react";
import arrow from "@/assets/arrowR.svg";
import TopCarousel from "./Carousel/TopCarousel";

interface IServices extends HTMLAttributes<HTMLDivElement> {}

const Services: FC<IServices> = async () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center pt-10 gap-10">
        <div className="w-full lg:w-[45%] 2xl:w-1/2">
          <h4 className="uppercase font-bold text-[20px] leading-[27.1px] text-[#3A67CC]">
            Servicios
          </h4>
          <h2 className="font-semibold text-[36px] leading-[44.83px] text-[#0F0F0F] mt-6">
            Esta info te llega desde un servicio externo
          </h2>
          <p className="font-light text-[18px] leading-[25.65px] mt-6 mb-6 w-full md:w-[95%]">
            Consultando el servicio en
            https://react-frontend.pages.dev/slides.json, debes usar Context
            para enviar los datos que necesitas en la sección de abajo. A la
            derecha tiene un slide o carrusel.
          </p>
          <Button size={"v1"}>
            Ver más <Image className="ml-5" alt="arrow" src={arrow} />
          </Button>
        </div>
        <div className="w-full lg:w-[55%] 2xl:w-1/2">
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <span className="inline-flex rounded-full h-10 w-10 bg-[#3D93FF] animate-ping mt-20"></span>
              </div>
            }
          >
            <TopCarousel />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};

export default Services;
