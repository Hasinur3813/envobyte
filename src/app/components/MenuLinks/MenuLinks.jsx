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
        <Link
          className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
          href="/services"
          aria-current={pathname === "/services" ? "active" : undefined}
        >
          SERVICES
        </Link>
      </li>
      <li>
        <Link
          className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
          href="/combo-sales"
          aria-current={pathname === "/combo-sales" ? "active" : undefined}
        >
          COMBO SALES
        </Link>
      </li>
      <li>
        <Link
          className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
          href="/portfolio"
          aria-current={pathname === "/portfolio" ? "active" : undefined}
        >
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link
          className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
          href="/about-us"
          aria-current={pathname === "/about-us" ? "active" : undefined}
        >
          ABOUT US
        </Link>
      </li>
      <li>
        <Link
          className="text-light font-semibold text-base leading-5 hover:text-accent transition-colors duration-200"
          href="/blogs"
          aria-current={pathname === "/blogs" ? "active" : undefined}
        >
          BLOGS
        </Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
