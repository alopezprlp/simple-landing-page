import React from "react";
import Carousel from "@/components/Home/Services/Carousel";

async function getData() {
  const res = await fetch("https://react-frontend.pages.dev/slides.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const TopCarousel = async () => {
  const data = await getData();

  return <Carousel data={data} />;
};

export default TopCarousel;
