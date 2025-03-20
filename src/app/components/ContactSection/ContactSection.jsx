import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className=" bg-[#001655] py-36 ">
      <div
        className="max-w-7xl font-inter mx-auto px-4 flex flex-col justify-around items-start
     md:flex-row relative z-10"
      >
        {/* glowing effect 1 */}
        <div className="absolute w-96 h-[600px] -left-16 -z-10 bg-[#0A3CCA99]  rounded-full blur-3xl"></div>

        {/* glowing effect 2 */}
        <div className="absolute w-64 h-64 -bottom-10 right-56  -z-10 bg-[#0A3CCA99]  rounded-full blur-3xl"></div>

        {/* Left - Contact Form */}
        <ContactForm />

        {/* Right - Contact Information */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold text-light mb-10">
            Let us know what you think!
          </h2>
          <p className="text-light text-base mb-8">
            Got something on your mind? Share it with us! Drop a message, and
            we'll respond quickly to assist you.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 pt-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg border border-light">
              <div className="flex justify-center items-center relative">
                <div className="absolute w-8 h-8 bg-light/50 rounded-full blur-[5px]"></div>
                <AiOutlineMail
                  size={22}
                  className="text-light font-bold relative z-10"
                />
              </div>
            </div>

            <div>
              <span className="text-sm text-light">Business:</span>
              <p className="text-white font-semibold text-base flex items-center justify-between">
                support@envobyte.com{" "}
                <FaExternalLinkAlt className="ms-2 text-[#4D5AE8]" />
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 pt-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg border border-[#25D366]">
              <div className="flex justify-center items-center relative">
                <div className="absolute w-8 h-8 bg-[#25D366] rounded-full blur-[5px]"></div>
                <FaWhatsapp
                  size={22}
                  className="text-light font-bold relative z-10"
                />
              </div>
            </div>

            <div>
              <span className="text-sm text-light">Whatsapp:</span>
              <p className="text-white font-semibold text-base flex items-center justify-between">
                +1 (667) 777 2477
                <FaExternalLinkAlt className="ms-2 text-[#4D5AE8]" />
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 pt-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg border border-[#2867B2]">
              <div className="flex justify-center items-center relative">
                <div className="absolute w-8 h-8 bg-[#2867B2] rounded-full blur-[5px]"></div>
                <FaLinkedin
                  size={22}
                  className="text-light font-bold relative z-10"
                />
              </div>
            </div>

            <div>
              <span className="text-sm text-light">Linkedin:</span>
              <p className="text-white font-semibold text-base flex items-center justify-between">
                www.linkedin.com/company/envobyte
                <FaExternalLinkAlt className="ms-2 text-[#4D5AE8]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
