"use client";

import React, { useState, useRef, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import Link from "next/link";
import useAnimation from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";

const portfolioImages = [
  {
    id: 1,
    src: "/images/Billie-mockup.jpg",
    title: "Billie-mockup",
    description: "Workforce management for the changing world.",
  },
  {
    id: 2,
    src: "/images/Bravaa-Mockup.jpg",
    title: "Bravaa-Mockup",
    description: "Grow your skills, Define your future.",
  },
  {
    id: 3,
    src: "/images/Ccosa-mockup.jpg",
    title: "Ccosa-mockup",
    description: "Ccosa-mockup",
  },
  {
    id: 4,
    src: "/images/E-learning-mockup.jpg",
    title: "E-learning-mockup",
    description: "Improve your skills in this way.",
  },
  {
    id: 5,
    src: "/images/Easypaid-mockup.jpg",
    title: "Easypaid-mockup",
    description: "Keep track of all your payments with easypaid.",
  },
  {
    id: 6,
    src: "/images/LanghamTrading-mockup.jpg",
    title: "LanghamTrading-mockup",
    description: "Grow your agency.",
  },
  {
    id: 7,
    src: "/images/LanghamTrading-V2-mockup.jpg",
    title: "LanghamTrading-mockup-V2",
    description: "Stop chasing losing trades.",
  },
  {
    id: 8,
    src: "/images/Maily-mockup.jpg",
    title: "Maily-mockup",
    description: "Email marketing software to engage your audience.",
  },
  {
    id: 9,
    src: "/images/Writing.jpg",
    title: "Writing-mockup",
    description: "Ask anything you desire, Our chat holds the solutions.",
  },
];

const PortfolioSection = () => {
  const { fadeUp, zoomIn } = useAnimation();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // Function to pair up images
  const getImagePairs = () => {
    let pairs = [];
    for (let i = 0; i < portfolioImages.length; i += 2) {
      pairs.push([portfolioImages[i], portfolioImages[i + 1]]);
    }
    return pairs;
  };

  // State for modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with selected image
  const openModal = (image) => {
    document.body.style.overflow = "hidden";
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
      document.body.style.overflow = "auto";
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

          <Link href={"/portfolio"}>
            <PrimaryButton className="relative z-10">
              All Portfolio
            </PrimaryButton>
          </Link>
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
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="portfolio-swiper"
          >
            {getImagePairs().map((image, index) => (
              <SwiperSlide key={image.id}>
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  custom={index * 0.1}
                  className="grid grid-rows-2 gap-4"
                >
                  <img
                    src={image[0].src}
                    alt={image[0].title}
                    className="rounded-xl cursor-pointer"
                    onClick={() => openModal(image[0])}
                  />
                  {/* Ensure the next image exists and render it */}
                  {image[1] && (
                    <img
                      src={image[1].src}
                      alt={image[1].title}
                      className="rounded-xl cursor-pointer"
                      onClick={() => openModal(image[1])}
                    />
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              ref={prevRef}
              className="custom-prev border border-[#0C89FF] rounded-md hover:bg-accent hover:text-light hover:border-accent cursor-pointer  text-[#0C89FF] p-2"
            >
              <IoIosArrowBack size={25} />
            </button>
            <button
              ref={nextRef}
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
