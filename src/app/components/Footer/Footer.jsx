import Link from "next/link";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import FooterSection from "../FooterSection/FooterSection";

const Footer = () => {
  return (
    <footer className="bg-primary border-t font-inter border-[#E5E7EB33]/50 text-white pt-10 px-5">
      <div className="container py-20 mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Left Section */}
        <div>
          <Link href={"/"}>
            {" "}
            <img src="/images/logo.png" alt="envobyte-logo" />
          </Link>
          <p className="text-gray-400 mt-2">
            We are an IT Company. We help businesses to bring ideas to life
            easily and affordably.
          </p>
        </div>

        {/* Company Section */}

        <FooterSection
          title="Company"
          links={[
            { name: "About Us", url: "/about-us" },
            { name: "Privacy Policy", url: "#" },
            { name: "Refund Policy", url: "#" },
          ]}
        />

        {/* Learn More Section */}

        <FooterSection
          title="Learn More"
          links={[
            { name: "Combo Offer", url: "/combo-sales" },
            { name: "Service Industries", url: "/services" },
            { name: "Envobyte Apps", url: "#" },
          ]}
        />

        {/* Support Section */}

        <FooterSection
          title="Support"
          links={[
            { name: "Contact Us", url: "#" },
            { name: "FAQ", url: "#" },
            { name: "Terms & Conditions", url: "#" },
          ]}
        />
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="mt-3 flex items-center space-x-4">
            <AiOutlineMail className="text-orange-500" size={20} />
            <p className="text-gray-400">support@envobyte.com</p>
          </div>
          <div className="mt-2 flex items-center space-x-4">
            <AiOutlineWhatsApp className="text-orange-500" size={20} />
            <p className="text-gray-400">+1 (667) 777 2477</p>
          </div>
          <div className="mt-5 flex gap-4">
            <a href="#">
              <img src="/images/facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/images/linkedin.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="/images/instragram.png" alt="instragram" />
            </a>
            <a href="#">
              <img src="/images/twitter.png" alt="twitter" />
            </a>
            <a href="#">
              <img src="/images/pinterest.png" alt="pinterst" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-[#E5E7EB33]/50  text-light text-sm">
        &copy; {new Date().getFullYear()} - ENVOBYTE, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
