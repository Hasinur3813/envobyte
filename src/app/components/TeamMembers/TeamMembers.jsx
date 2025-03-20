"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/teamMembers.json")
      .then((response) => response.json())
      .then((data) => {
        setTeam(data);
      })
      .catch((error) => {
        console.error("Error loading reviews:", error);
      });
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4">
        <p className="font-semibold text-center text-lg md:text-xl tracking-widest text-secondary">
          EXPERINCED TEAM
        </p>
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 lg:mt-4">
          Our Team Members
        </h3>

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
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-lg overflow-hidden mt-10"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div>
                <img src={member.image} alt={member.title} className="w-full" />
                <div className="p-5 bg-[#0A2C8C] text-light font-inter">
                  <h4 className="font-semibold text-xl leading-7">
                    {member.name}
                  </h4>
                  <p className="font-semibold text-base">{member.title}</p>
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
    </section>
  );
};

export default TeamMembers;
