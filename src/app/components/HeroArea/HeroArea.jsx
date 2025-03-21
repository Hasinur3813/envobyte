"use client";
import PrimaryButton from "../Buttons/PrimaryButton";
import Image from "next/image";
import HeroStats from "../HeroStats/HeroStats";
import Link from "next/link";
import { motion } from "framer-motion";
import useAnimation from "@/app/hooks/useAnimation";

const HeroArea = () => {
  const { fadeUp, zoomIn } = useAnimation();

  return (
    <div className="bg-primary relative">
      {/* glowing effect */}
      <div className="absolute  w-[300px] h-[300px] bg-[#0A3CCA99] rounded-full blur-3xl -bottom-40 right-0  z-10"></div>
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
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest text-light mb-1 md:mb-2 "
          >
            DIGITAL SERVICES
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-light text-sm sm:text-lg md:text-2xl leading-7 font-extrabold"
          >
            BUILDING YOUR EMPIRE DIGITALLY
          </motion.p>

          {/* cta button */}
          <div className="mt-12 sm:space-x-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              <Link href={"/pricing"}>
                <PrimaryButton className={"w-full"}>SEE PRICING</PrimaryButton>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
            >
              <Link href={"#contact"}>
                <PrimaryButton className="w-full !bg-transparent border">
                  BOOK AN APPOINMENT
                </PrimaryButton>
              </Link>
            </motion.div>
          </div>

          {/* stats */}
          <HeroStats />
          {/* hero image */}
          <motion.div variants={zoomIn} initial="hidden" whileInView="visible">
            <Image
              src="/images/hero.png"
              alt="hero.png"
              width={980}
              height={550}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
