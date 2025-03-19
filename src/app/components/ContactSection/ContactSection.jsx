"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section className=" bg-[#001655] py-36">
      <div
        className="max-w-7xl font-inter mx-auto px-4 flex flex-col justify-around items-start
     md:flex-row"
      >
        {/* Left - Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-8 border border-[#E1E4ED26] bg-[#0A2C8C33] rounded-md"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* name field */}
              <div>
                <label className="block text-sm font-semibold text-light mb-3">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 border border-[#E1E4ED26] text-light/50 py-[18px] rounded-md"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* email field */}
              <div>
                <label className="block text-sm font-semibold text-light mb-3">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 border border-[#E1E4ED26] text-light/50 py-[18px] rounded-md"
                  placeholder="support@envobyte.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-light mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-4 border border-[#E1E4ED26] text-light/50 py-[18px] rounded-md"
                  placeholder="+1 (667) 777 2477"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* company */}
              <div>
                <label className="block text-sm font-semibold text-light mb-3">
                  Company
                </label>
                <input
                  type="text"
                  {...register("company")}
                  className="w-full px-4 border border-[#E1E4ED26] text-light/50 py-[18px] rounded-md"
                  placeholder="Envobyte"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-light mb-3">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 border border-[#E1E4ED26] text-light/50 py-[18px] rounded-md"
                placeholder="Type your message here..."
                rows={4}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="font-semibold px-5 border border-[#E1E4ED26] text-light/50 py-[14px] rounded-md flex justify-between gap-2 items-center text-lg group cursor-pointer"
            >
              Send message{" "}
              <IoArrowForward
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-5xl  font-extrabold text-light mb-10">
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
