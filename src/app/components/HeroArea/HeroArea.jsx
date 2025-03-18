import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Image from "next/image";
import HeroStats from "../HeroStats/HeroStats";

const HeroArea = () => {
  return (
    <div className="bg-primary relative">
      {/* glowing effect */}
      <div className="absolute  w-[300px] h-[300px] bg-[#0A3CCA99] rounded-full blur-3xl -bottom-40 right-0  "></div>
      {/* trapezoidal  effect */}
      <div
        className="absolute inset-0 w-full h-screen bg-gradient-to-b from-primary via-[#073082] to-black shadow-[0_0_50px_rgba(0,0,255,0.7)]"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      {/* container for the hero area content */}
      <div className="container mx-auto px-4 ">
        <div className="pt-8 md:pt-16 pb-32 text-center relative">
          <h1 className="font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest text-light mb-1 md:mb-2 ">
            DIGITAL SERVICES
          </h1>
          <p className="text-light text-sm sm:text-lg md:text-2xl leading-7 font-extrabold">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>

          {/* cta button */}
          <div className="mt-12 sm:space-x-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center">
            <PrimaryButton>SEE PRICING</PrimaryButton>
            <PrimaryButton className="!bg-transparent border">
              BOOK AN APPOINMENT
            </PrimaryButton>
          </div>

          {/* stats */}
          <HeroStats />
          {/* hero image */}
          <Image
            src="/images/hero.png"
            alt="hero.png"
            width={980}
            height={550}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
