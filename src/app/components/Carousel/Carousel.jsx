"use client"; // Needed for Next.js (App Router)

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const slides = [
  {
    id: 1,
    image: "/images/wordpress.png",
    title: "Wordpress Website",
    subtitle: "Design & Development",
  },
  {
    id: 2,
    image: "/images/content-writting.png",
    title: "Content Writing",
    subtitle: "For entire project",
  },
  {
    id: 3,
    image: "/images/seo.png",
    title: "Monthly SEO",
    subtitle: "Rank #1 on google",
  },
  {
    id: 4,
    image: "/images/logo-design.svg",
    title: "Logo Design",
    subtitle: "Create Brand Identity",
  },
  {
    id: 5,
    image: "/images/marketing.svg",
    title: "Brand Marketing",
    subtitle: "From start to end",
  },
  {
    id: 6,
    image: "/images/social-media.svg",
    title: "Social Media Post",
    subtitle: "For Social Kit",
  },
  {
    id: 7,
    image: "/images/video.svg",
    title: "Animated Video",
    subtitle: "Explain your business",
  },
  {
    id: 8,
    image: "/images/website-maintenance.svg",
    title: "Website Maintenance",
    subtitle: "Zero hassle business",
  },
  {
    id: 9,
    image: "/images/graphics.svg",
    title: "Custom Graphics",
    subtitle: "According to your business",
  },
];

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative container px-4 mx-auto">
      {/* glowing effect 1 */}
      <div className="absolute  w-[600px] h-[400px] bg-[#0A3CCA99] rounded-full blur-3xl bottom-8 left-2/6  "></div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[400px] border rounded-md bg-[#3158C733] p-10 flex flex-col justify-center items-center font-inter">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[150px] h-[150px] object-contain"
              />
              <h5 className="font-semibold text-xl md:text-2xl text-light leading-10">
                {slide.title}
              </h5>
              <p className="text-base text-light">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button
                  type="button"
                  className="bg-[#0C89FF] px-10 py-3 rounded-full text-sm text-light cursor-pointer w-full sm:w-auto"
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  className="border border-[#0C89FF] px-10 py-3 rounded-full text-sm text-[#0C89FF] cursor-pointer  w-full sm:w-auto"
                >
                  Order
                </button>
              </div>
            </div>
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
  );
};

export default Carousel;
