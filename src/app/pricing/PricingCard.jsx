"use client";
import toast from "react-hot-toast";
import { FaCrown, FaStar, FaWrench } from "react-icons/fa";
import { IoCheckmarkCircleSharp, IoRadioButtonOff } from "react-icons/io5";

const PricingCard = ({ plan }) => {
  const icons = {
    Premium: <FaCrown className="text-2xl text-yellow-500" />,
    "Premium Plus": <FaStar className="text-2xl text-purple-500" />,
    "Custom Plan": <FaWrench className="text-2xl text-green-500" />,
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>

      {/* Price */}
      <div className="flex items-center gap-2 mt-2">
        {icons[plan.name]}
        <p className="text-3xl font-bold text-blue-600">{plan.price}</p>
        {plan.oldPrice && (
          <span className="text-gray-400 line-through text-lg">
            {plan.oldPrice}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">{plan.description}</p>

      {/* Features List */}
      <div className="mt-4 space-y-3 text-sm flex-grow mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {feature.included ? (
              <IoCheckmarkCircleSharp className="text-blue-600 text-lg" />
            ) : (
              <IoRadioButtonOff className="text-gray-400 text-lg" />
            )}
            <span
              className={
                feature.included ? "text-gray-800 font-medium" : "text-gray-400"
              }
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          toast.success("You have successfully purchased the plan.")
        }
        className="w-full mt-auto bg-blue-600 cursor-pointer text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
