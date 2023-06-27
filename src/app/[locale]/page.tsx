import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";



export default async function HomeP() {
  return (
    <main className="">
      <Hero />
      <Services/>
      <About />
    </main>
  );
}
