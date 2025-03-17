import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { TbWorldPlus } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const HeroArea = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="pt-16 pb-32 text-center">
          <h1 className="font-extrabold text-7xl tracking-widest text-light mb-2">
            DIGITAL SERVICES
          </h1>
          <p className="text-light text-2xl leading-7 font-extrabold">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>

          {/* cta button */}
          <div className="mt-12 space-x-4">
            <PrimaryButton>SEE PRICING</PrimaryButton>
            <PrimaryButton className="!bg-transparent border">
              BOOK AN APPOINMENT
            </PrimaryButton>
          </div>

          {/* stats */}
          <div className="flex justify-between items-center mb-20 mt-14 font-inter">
            {/* stat 1 */}
            <div className="flex justify-between items-center gap-3 border-r border-light">
              <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
                <TbWorldPlus size={24} className="text-light" />
              </div>
              <div>
                <h5 className="font-semibold text-2xl text-light text-start">
                  2k+
                </h5>
                <p className="text-light font-semibold text-base leading-5">
                  Websites build
                </p>
              </div>
            </div>
            {/* stat 2 */}
            <div className="flex justify-between items-center gap-3 border-r border-light">
              <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
                <AiOutlineLike size={24} className="text-light" />
              </div>
              <div>
                <h5 className="font-semibold text-2xl text-light text-start">
                  97%
                </h5>
                <p className="text-light font-semibold text-base leading-5">
                  Client satisfaction
                </p>
              </div>
            </div>
            {/* stat 3 */}
            <div className="flex justify-between items-center gap-3 border-r border-light">
              <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
                <RiTeamLine size={24} className="text-light" />
              </div>
              <div>
                <h5 className="font-semibold text-2xl text-light text-start">
                  25+
                </h5>
                <p className="text-light font-semibold text-base leading-5">
                  Team members
                </p>
              </div>
            </div>
            {/* stat 4 */}
            <div className="flex justify-between items-center gap-3">
              <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
                <FaUserCircle size={24} className="text-light" />
              </div>
              <div>
                <h5 className="font-semibold text-2xl text-light text-start">
                  500+
                </h5>
                <p className="text-light font-semibold text-base leading-5">
                  Amazing clients
                </p>
              </div>
            </div>
          </div>

          {/* hero image */}
          <Image
            src="/images/hero.png"
            alt="hero.png"
            width={980}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
