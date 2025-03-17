import { TbWorldPlus } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const HeroStats = () => {
  return (
    <div className="grid gap-2  place-items-center grid-cols-2 md:grid-cols-4 mb-20 mt-14 font-inter">
      {/* stat 1 */}
      <div className="flex justify-between items-center gap-3 relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-light after:-right-10 after:rounded-sm after:opacity-50 after:hidden lg:after:block">
        <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
          <TbWorldPlus size={24} className="text-light" />
        </div>
        <div>
          <h5 className="font-semibold text-base sm:text-xl md:text-2xl text-light text-start">
            2k+
          </h5>
          <p className=" text-light font-semibold sm:text-base text-start text-xs leading-5">
            Websites build
          </p>
        </div>
      </div>
      {/* stat 2 */}
      <div className="flex justify-between items-center gap-3 relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-light after:-right-10 after:rounded-sm after:opacity-50 after:hidden lg:after:block">
        <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
          <AiOutlineLike size={24} className="text-light" />
        </div>
        <div>
          <h5 className="font-semibold text-base sm:text-xl md:text-2xl text-light text-start">
            97%
          </h5>
          <p className="text-light font-semibold text-xs text-start sm:text-base leading-5">
            Client satisfaction
          </p>
        </div>
      </div>
      {/* stat 3 */}
      <div className="flex justify-between items-center gap-3 relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-light after:-right-10 after:rounded-sm after:opacity-50 after:hidden lg:after:block">
        <div className="rounded w-12 h-12 flex justify-center items-center border border-light">
          <RiTeamLine size={24} className="text-light" />
        </div>
        <div>
          <h5 className="font-semibold text-base sm:text-xl md:text-2xl text-light text-start">
            25+
          </h5>
          <p className="text-light font-semibold text-xs text-start sm:text-base leading-5">
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
          <h5 className="font-semibold text-base sm:text-xl md:text-2xl text-light text-start">
            500+
          </h5>
          <p className="text-light font-semibold text-xs text-start sm:text-base leading-5">
            Amazing clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
