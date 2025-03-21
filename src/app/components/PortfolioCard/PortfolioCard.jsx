import React from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="bg-light rounded-lg border border-gray-200 shadow flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <img
        src={portfolio.image}
        alt={portfolio.title}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="flex-grow p-4">
        <p className="text-sm text-dark my-3">{portfolio.subtitle}</p>
        <h5 className="text-lg font-semibold text-dark mt-3">
          {portfolio.title}
        </h5>
        <p className="text-sm text-dark mt-1">{portfolio.description}</p>
      </div>
      <button
        onClick={() => toast.success("Viewing portfolio")}
        type="button"
        className="border-none flex items-center mt-5 gap-2 font-semibold text-accent text-lg cursor-pointer p-4 !pt-0"
      >
        Read More <FaArrowRight />
      </button>
    </div>
  );
};

export default PortfolioCard;
