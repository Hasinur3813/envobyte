"use client";

import { TbWorldPlus } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import useAnimation from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";

// Stats data
const statsData = [
  { id: 1, icon: TbWorldPlus, value: "2k+", label: "Websites built" },
  { id: 2, icon: AiOutlineLike, value: "97%", label: "Client satisfaction" },
  { id: 3, icon: RiTeamLine, value: "25+", label: "Team members" },
  { id: 4, icon: FaUserCircle, value: "500+", label: "Amazing clients" },
];

const HeroStats = () => {
  const { fadeUp, slideFromRight, slideFromLeft } = useAnimation();
  return (
    <div className="grid gap-2 place-items-center grid-cols-2 md:grid-cols-4 mb-20 mt-14 font-inter">
      {statsData.map(({ id, icon: Icon, value, label }, index) => (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={index * 0.2}
          key={id}
          className="flex justify-between items-center gap-3 relative"
        >
          {/* Stat Icon */}
          <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
            <Icon size={24} className="text-light" />
          </div>

          {/* Stat Text */}
          <div>
            <h5 className="font-semibold text-base sm:text-xl md:text-2xl text-light text-start">
              {value}
            </h5>
            <p className="text-light font-semibold text-xs text-start sm:text-base leading-5">
              {label}
            </p>
          </div>

          {/* Divider (Hidden on smaller screens) */}
          {index !== statsData.length - 1 && (
            <div className="absolute w-[2px] h-full bg-light -right-10 rounded-sm opacity-50 hidden lg:block" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;
