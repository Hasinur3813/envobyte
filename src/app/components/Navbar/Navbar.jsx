"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Image from "next/image";
import MenuLinks from "../MenuLinks/MenuLinks";
import PrimaryButton from "../Buttons/PrimaryButton";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const showMenu = () => {
    setVisibleMenu((prev) => !prev);
  };
  return (
    <div className="bg-primary">
      <div className="conatainer mx-auto px-4">
        <nav className="flex justify-between items-center py-9 relative">
          {/* logo */}
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={122} height={34} />
          </Link>

          {/* menus */}
          <MenuLinks />

          {/* pricing button */}
          <Link href={"/pricing"}>
            <PrimaryButton className="hidden lg:block">
              See Pricing
            </PrimaryButton>
          </Link>

          {/* navbar end */}

          <button
            onClick={showMenu}
            type="button"
            className="lg:hidden p-2 rounded-md cursor-pointer bg-accent text-white transition-all duration-300 hover:bg-accent/80 "
          >
            <HiMenuAlt2 size={30} />
          </button>
        </nav>

        <MobileMenu visibleMenu={visibleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
