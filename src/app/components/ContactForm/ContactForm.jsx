"use client";

import { useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import { toast, Toaster } from "react-hot-toast";

const ContactForm = () => {
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
    <div>
      <Toaster />
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
  );
};

export default ContactForm;
