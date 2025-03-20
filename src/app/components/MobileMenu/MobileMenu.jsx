"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            href="http://"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="http://"
          >
            COMBO SALES
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="http://"
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="http://"
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
            href="http://"
          >
            BLOGS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
