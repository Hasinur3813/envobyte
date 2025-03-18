import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Carousel from "../Carousel/Carousel";

const Services = () => {
  return (
    <section className="bg-primary relative">
      <img
        src="/images/services-bg.png"
        alt="background"
        className="absolute bottom-0 h-64"
      />
      <div className="container mx-auto px-4">
        {/* top content */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-base text-accent leading-6 tracking-widest">
              DIGITAL SERVICES
            </p>
            <h3 className="tracking-wide font-bold text-lg lg:text-5xl text-light">
              Check Our Available Services
            </h3>
          </div>
          <PrimaryButton className="relative z-10">All Services</PrimaryButton>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[2px] bg-light opacity-40 my-8 rounded-md"></div>

        {/* services menu */}
        <div className="pb-20">
          <ul className="flex items-center space-x-3 sm:space-x-5 md:space-x-10 pb-16 flex-wrap leading-8">
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
                type="button"
              >
                website
              </button>
            </li>
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] font-bold cursor-pointer"
                type="button"
              >
                ui/ux
              </button>
            </li>
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
                type="button"
              >
                seo
              </button>
            </li>
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
                type="button"
              >
                logo design
              </button>
            </li>
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
                type="button"
              >
                banner design
              </button>
            </li>
            <li>
              <button
                className="text-light uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
                type="button"
              >
                google ads
              </button>
            </li>
          </ul>

          {/* services content */}
          <Carousel />
          <div className="flex justify-end items-center mt-16 gap-4">
            <p className="font-semibold text-sm tracking-widest text-light ">
              CREATIVE SOLUTION
            </p>
            <span className="inline-block w-14 h-1 bg-light rounded-md opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
