import React from "react";
import toast from "react-hot-toast";

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-light rounded-lg border border-gray-200 shadow p-5 flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h5 className="text-lg font-semibold text-dark mt-3">
          {service.title}
        </h5>
        <p className="text-sm text-dark mt-1">{service.subtitle}</p>
        <p className="text-sm font-semibold text-accent mt-1">
          {service.price}
        </p>
      </div>
      <button
        onClick={() => toast.success("Viewing service")}
        type="button"
        className="bg-accent text-light px-5 py-2 rounded-lg mt-3 w-full cursor-pointer"
      >
        View
      </button>
    </div>
  );
};

export default ServicesCard;
