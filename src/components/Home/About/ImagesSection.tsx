import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import I1 from "@/assets/images/about/ab-1.png";
import I2 from "@/assets/images/about/ab-2.png";
import I3 from "@/assets/images/about/ab-3.png";
import I4 from "@/assets/images/about/ab-4.png";
import I5 from "@/assets/images/about/ab-5.png";

interface IImageSection extends HTMLAttributes<HTMLDivElement> {}
const ImageSection: FC<IImageSection> = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-2 w-full h-[39rem] lg:h-auto max-h-[35rem]">
      <div className="row-span-2 relative">
        <Image
          alt="1"
          src={I1}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="w-full h-[90%] absolute -top-3 -left-5 bg-[#2E53A3] rounded-[10px] -z-10"></div>
      </div>
      <div className="col-span-2 relative">
        <Image
          alt="5"
          src={I5}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="row-span-1 col-span-2 relative">
        <Image
          alt="2"
          src={I2}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="row-span-1 col-span-1 relative">
        <Image
          alt="3"
          src={I3}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="row-span-2 col-span-1 relative">
        <Image
          alt="4"
          src={I4}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        />
        <div className="w-full h-[90%] absolute -bottom-1 -right-5 bg-[#3D93FF] rounded-[10px] -z-10"></div>
      </div>
    </div>
  );
};

export default ImageSection;
