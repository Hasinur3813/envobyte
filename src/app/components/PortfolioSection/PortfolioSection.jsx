import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const images = [
  "/images/writing.jpg",
  "/images/writing.jpg",
  "/images/writing.jpg",
  "/images/writing.jpg",
  "/images/writing.jpg",
  "/images/writing.jpg",
];

const PortfolioSection = () => {
  return (
    <section className="relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-base text-secondary leading-6 tracking-widest">
              UI/UX PORTFOLIO
            </p>
            <h3 className="tracking-wide font-bold text-lg lg:text-5xl">
              Check Our Available Services
            </h3>
          </div>
          <PrimaryButton className="relative z-10">All Portfolio</PrimaryButton>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[2px] bg-black opacity-30 my-8 rounded-md"></div>

        {/* menus */}
        <ul className="flex items-center space-x-3 sm:space-x-5 md:space-x-10 pb-16 flex-wrap leading-8">
          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] font-bold cursor-pointer"
              type="button"
            >
              ui/ux
            </button>
          </li>
          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
              type="button"
            >
              website
            </button>
          </li>

          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
              type="button"
            >
              seo
            </button>
          </li>
          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
              type="button"
            >
              logo design
            </button>
          </li>
          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
              type="button"
            >
              banner design
            </button>
          </li>
          <li>
            <button
              className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold "
              type="button"
            >
              google ads
            </button>
          </li>
        </ul>

        {/* portfolio */}

        <div className="w-full overflow-x-auto py-5">
          <div className="flex gap-4 w-max">
            {images.map((src, index) => (
              <div key={index} className="w-[360px] h-[420px] flex-none">
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
