"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLinks = ({ visibleMenu }) => {
  const pathname = usePathname();
  return (
    <ul className="hidden lg:flex justify-center items-center gap-10 font-inter">
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
          SERVICE
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
  );
};

export default MenuLinks;
