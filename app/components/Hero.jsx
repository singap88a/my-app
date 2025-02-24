import Image from "next/image";
import React from "react";
import hero_1 from "../../public/Hero_1.jpeg";
import hero_2 from "../../public/Hero_2.jpeg";

export default function Hero() {
  return (
    <div>
      <section className=" md:pl-20 flex flex-col md:flex-row items-center justify-between pt-20 pr-2 pl-2" id="home">
         <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            We make your brand speak loudly in a <br /> world full of noise
          </h1>
          <p className="text-gray-700 max-w-md">
            The company's mission is to transform creative ideas into successful
            marketing campaigns whose impact can be measured. The focus here is
            on practical implementation that leads to achieving tangible results
            for the client.
          </p>
          <button className="bg-white shadow px-20 py-3 rounded-tr-full rounded-br-full rounded-bl-full font-bold text-black border-2 border-white hover:shadow-lg transition">
            Service
          </button>
        </div>

         <div className="md:w-1/2 flex gap-10 justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative ">
            <Image
              src={hero_1}
              alt="Marketing Team"
              className="w-[301px] h-[478px] object-cover   rounded-br-full rounded-bl-full rounded-tl-full    "
            />
            <div className="absolute -top-5 -left-5 w-full h-full border-4 border-white rounded-br-full rounded-bl-full rounded-tl-full"></div>
          </div>

          <div className="relative md:flex hidden">
            <Image
              src={hero_2}
              alt="Business Strategy"
              className="w-[293px] h-[483px]   object-cover   rounded-br-full rounded-tr-full rounded-tl-full "
            />
            <div className="absolute -top-5 -left-5 w-full h-full border-4 border-white  rounded-br-full rounded-tr-full rounded-tl-full"></div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
