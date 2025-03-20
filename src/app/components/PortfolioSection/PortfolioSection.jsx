"use client";

import React, { useState, useRef } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import PortfolioModal from "../PortfolioModal/PortfolioModal";

const portfolioImages = [
  {
    src: "/images/writing.jpg",
    title: "Project 1",
    description: "Description for project 1",
  },
  {
    src: "/images/writing.jpg",
    title: "Project 2",
    description: "Description for project 2",
  },
  {
    src: "/images/writing.jpg",
    title: "Project 3",
    description: "Description for project 3",
  },
  {
    src: "/images/writing.jpg",
    title: "Project 4",
    description: "Description for project 4",
  },
  {
    src: "/images/writing.jpg",
    title: "Project 5",
    description: "Description for project 5",
  },
  {
    src: "/images/writing.jpg",
    title: "Project 6",
    description: "Description for project 6",
  },
];

const PortfolioSection = () => {
  const swiperRef = useRef(null);
  const modalRef = useRef(null);

  // State for modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = (e) => {
    if (
      e.target.contains(modalRef.current) ||
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "svg"
    ) {
      setIsModalOpen(false);
      setSelectedImage(null);
    }
  };

  return (
    <section className="relative z-20 pb-36">
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
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] font-bold cursor-pointer">
              ui/ux
            </button>
          </li>
          <li>
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold">
              website
            </button>
          </li>
          <li>
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold">
              seo
            </button>
          </li>
          <li>
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold">
              logo design
            </button>
          </li>
          <li>
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold">
              banner design
            </button>
          </li>
          <li>
            <button className="text-black uppercase font-inter text-base leading-5 hover:text-[#0C89FF] cursor-pointer font-bold">
              google ads
            </button>
          </li>
        </ul>

        {/* Swiper Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="portfolio-swiper"
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-rows-2 gap-4">
                  <img
                    src={image.src}
                    alt={`Portfolio ${index}`}
                    className="rounded-xl cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                  {portfolioImages[index + 1] && (
                    <img
                      src={portfolioImages[index + 1].src}
                      alt={`Portfolio ${index + 1}`}
                      className="rounded-xl cursor-pointer"
                      onClick={() => openModal(portfolioImages[index + 1])}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="custom-prev border border-[#0C89FF] rounded-md hover:bg-accent hover:text-light hover:border-accent cursor-pointer  text-[#0C89FF] p-2"
            >
              <IoIosArrowBack size={25} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="custom-next border cursor-pointer border-accent rounded-md bg-accent text-light hover:border-accent/50 p-2"
            >
              <IoIosArrowForward size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && selectedImage && (
        <PortfolioModal
          modalRef={modalRef}
          selectedImage={selectedImage}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
