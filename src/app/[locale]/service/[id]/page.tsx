import Breadcumb from "@/components/Common/Breadcumb";
import Container from "@/components/ui/Container";
import { DataType } from "@/context/store";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";
import bgcert from "@/assets/bg-ser.png";

interface IProps {
  params: { id: string };
}

async function getData(id: string): Promise<DataType> {
  const res = await fetch("https://react-frontend.pages.dev/slides.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const services: DataType[] = await res.json();

  return services.filter((service) => service.id === id)[0];
}

export async function generateStaticParams() {
  const services: DataType[] = await fetch(
    "https://react-frontend.pages.dev/slides.json"
  ).then((res) => res.json());

  return services.map((item) => ({
    id: item.id,
  }));
}
const Service: FC<IProps> = async ({ params }) => {
  const { id } = params;
  if (!id) redirect("/");

  const service = await getData(id);

  if (!service) redirect("/");

  return (
    <>
      <Breadcumb title={service.title} category="Services" />
      <Container>
        <div className="w-full h-[25rem] relative">
          <Image
            alt="d"
            src={bgcert}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <h2 className="font-semibold text-[36px] leading-[44.83px] text-[#0F0F0F] mt-6">
          {service.title}
        </h2>
        <p className="font-light text-[18px] leading-[25.65px] mt-6 mb-6 w-full md:w-[95%]">
          {service.description}
        </p>
      </Container>
    </>
  );
};

export default Service;
