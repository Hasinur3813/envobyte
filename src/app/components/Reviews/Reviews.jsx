"use client";

import ClientReview from "../ClientReview/ClientReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

// Function to group reviews in sets of 6 (3 per row)
const groupReviews = (reviews, size = 6) => {
  return reviews.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(reviews.slice(i, i + size));
    return acc;
  }, []);
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((response) => response.json())
      .then((data) => {
        const groupedReviews = groupReviews(data, 6);
        setReviews(groupedReviews);
      })
      .catch((error) => {
        console.error("Error loading reviews:", error);
      });
  }, []);

  return (
    <div className="relative">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="mt-6"
      >
        {reviews.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {group.map((review) => (
                <ClientReview
                  key={review.id}
                  name={review.name}
                  source={review.source}
                  platform={review.platform}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}

      <button className="custom-prev absolute top-[100%] mt-9 left-[45%] -translate-x-full text-primary p-3 rounded-md border border-primary transition flex items-center justify-center w-10 h-10 cursor-pointer">
        <FaChevronLeft size={18} />
      </button>
      <button className="custom-next absolute top-[100%] mt-9 left-[48%] bg-accent text-white p-3 rounded-md  transition flex items-center justify-center w-10 h-10  cursor-pointer">
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default Reviews;
