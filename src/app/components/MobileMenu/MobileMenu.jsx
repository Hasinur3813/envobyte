"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryButton from "../Buttons/PrimaryButton";

const MobileMenu = ({ visibleMenu }) => {
  const pathname = usePathname();
  return (
    <div
      className={` w-full h-0 ${
        visibleMenu && "h-56"
      } transition-all duration-300 overflow-hidden bg-primary rounded-md z-10 `}
    >
      <ul className=" flex flex-col justify-center items-start leading-snug gap-2 font-inter">
        <li>
          <Link
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            aria-current={pathname === "/" ? "active" : undefined}
            href="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="/services"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="/combo-sales"
          >
            COMBO SALES
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="/portfolio"
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="/about-us"
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="/blogs"
          >
            BLOGS
          </a>
        </li>
        {/* pricing button */}
        <li className="w-full">
          <Link href={"/pricing"} className="block">
            <PrimaryButton className="w-full">See Pricing</PrimaryButton>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
