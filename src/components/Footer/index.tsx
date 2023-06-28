import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full h-[20rem] bg-[#001853] flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col md:flex-row  items-center justify-evenly md:pl-[2.25rem]">
      <div className="flex flex-col justify-center items-center content-center gap-5">
        <Phone size={30} color="white" />
        <Link className="text-[#ACACAD] text-sm font-medium" href="tel:+9999999999">+9999999999</Link>
      </div>
      <div className="flex flex-col justify-center items-center content-center gap-5">
        <MapPin size={30} color="white" />
        <Link className="text-[#ACACAD] text-sm font-medium" href="#">
          PO Box 16122 Collins Street West
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center content-center gap-5">
        <Mail size={30} color="white" />
        <div className="flex flex-col gap-0 text-center">
          <Link className="text-[#ACACAD] text-sm font-medium" href="mailto:example@example.com">mail@example.com</Link>
        </div>
      </div>
      </div>
      <div className="w-full h-12 text-center text-xs text-[#ACACAD]">{`@${new Date().getFullYear()}`}</div>
    </footer>
  );
}
