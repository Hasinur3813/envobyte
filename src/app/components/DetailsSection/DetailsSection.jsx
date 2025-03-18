import Image from "next/image";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

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
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold text-base tracking-widest text-secondary mb-4">
          MORE DETAILS
        </p>
        <h3 className="font-bold font-inter text-5xl tracking-wide mb-10 text-[#0A2C8C]">
          Get Your Answer
        </h3>

        {/* cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center font-inter">
          {details.map((info) => (
            <div
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
              <h3 className="mt-8 font-semibold text-3xl group-hover:text-light mb-2">
                {info.title}
              </h3>
              <p className="font-medium text-base text-secondary mb-6  ">
                {info.subtitle}
              </p>
              <p className="text-base group-hover:text-light  text-[#424242]">
                {info.paragraph}
              </p>
            </div>
          ))}
        </div>
        <PrimaryButton className={"mt-10"}>See Pricing</PrimaryButton>
      </div>

      <div className="relative">
        <img
          src="/images/vector1.png"
          alt="vector-img"
          className="-mt-48 relative -z-20 h-80 w-full"
        />
        <img
          src="/images/vector2.png"
          alt="vector-img"
          className="absolute top-14"
        />
      </div>
    </section>
  );
};

export default DetailsSection;
