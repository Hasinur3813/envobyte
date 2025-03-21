"use client";

import Image from "next/image";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import useAnimation from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";

const details = [
  {
    id: 1,
    image: "/images/envobyte.png",
    title: "Why Chose Envobyte",
    subtitle: "Experienced & trustworthy",
    paragraph:
      "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
  },
  {
    id: 2,
    image: "/images/benifit.png",
    title: "What’s Your Benefit",
    subtitle: "No hassle with best price",
    paragraph:
      "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
  },
  {
    id: 3,
    image: "/images/combo-offer.png",
    title: "What is Combo Offer",
    subtitle: "Get 9 services in one package",
    paragraph:
      "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
  },
];

const DetailsSection = () => {
  const { fadeUp } = useAnimation();
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-semibold text-base tracking-widest text-secondary mb-2 lg:mb-4"
        >
          MORE DETAILS
        </motion.p>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          className="font-bold font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide mb-10 text-[#0A2C8C]"
        >
          Get Your Answer
        </motion.h3>

        {/* cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center font-inter">
          {details.map((info, index) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              key={info.id}
              className="p-5 border border-[#E8E5E5] rounded-sm text-start group hover:bg-primary transition-colors duration-300 h-full bg-light"
            >
              <Image
                src={info.image}
                alt={info.title}
                width="250"
                height="250"
                className="mx-auto"
              />
              <h3 className="mt-8 font-semibold text-xl md:text-2xl lg:text-3xl group-hover:text-light mb-2">
                {info.title}
              </h3>
              <p className="font-medium text-base text-secondary mb-6  ">
                {info.subtitle}
              </p>
              <p className="text-base group-hover:text-light  text-[#424242]">
                {info.paragraph}
              </p>
            </motion.div>
          ))}
        </div>
        <Link href={"/pricing"}>
          <PrimaryButton className={"mt-10"}>See Pricing</PrimaryButton>
        </Link>
      </div>

      <div className="relative -z-30">
        <img
          src="/images/vector1.png"
          alt="vector-img"
          className="-mt-48 relative -z-20 h-80 w-full"
        />
        <img
          src="/images/vector2.png"
          alt="vector-img"
          className="absolute top-14 h-96 -z-20 w-full"
        />
      </div>
    </section>
  );
};

export default DetailsSection;
