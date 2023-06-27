import Container from "@/components/ui/Container";
import { FC, HTMLAttributes } from "react";
import ServicesAbout from "@/components/Home/About/ServicesAbout";
import ImageSection from "@/components/Home/About/ImagesSection";

interface IAbout extends HTMLAttributes<HTMLDivElement> {}
const About: FC<IAbout> = () => {
  return (
    <Container className="mt-40 mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ImageSection />
        <ServicesAbout />
      </div>
    </Container>
  );
};

export default About;
