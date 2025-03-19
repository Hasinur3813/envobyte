"use client";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const ClientReview = ({ name, source, platform }) => {
  return (
    <div className="p-8 border border-[#f2f3f9] rounded-md space-y-4">
      <ReactStars
        count={5}
        size={18}
        activeColor="#4580FF"
        value={5}
        emptyIcon={<FaStar />}
        filledIcon={<FaStar />}
        disabled={true}
      />
      <p>
        “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien
        fusce egestas risus purus suspendisse turpis volutpat onare”
      </p>
      <div className="flex items-center gap-2">
        <img
          src="/images/image1.png"
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-[#0A2C8C] font-medium text-lg">{name}</h4>
          <p className="flex justify-start items-center gap-2 text-sm text-gray-400">
            <img src={platform} alt="fiver" />
            from {source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
