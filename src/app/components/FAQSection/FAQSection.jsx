"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const accordionData = [
  {
    id: 1,
    question: "What Is Included In Your Web Development Service?",
    answer:
      "Our web development service includes designing and developing custom websites tailored to your needs. We provide full-stack development, responsive design, content management systems (CMS), e-commerce functionality, and ongoing support after launch.",
  },
  {
    id: 2,
    question: "What Technologies Do You Use For Web Development?",
    answer:
      "We use modern technologies such​ as WordPress, HTML5, CSS3, Java Script, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
  },
  {
    id: 3,
    question: "What If I Need Ongoing Support After The Website Is Launched?",
    answer:
      "Yes, we offer ongoing support after your website is launched. Our support services include website maintenance, security updates, bug fixes, content updates, and performance optimization to ensure your website remains up-to-date and functioning smoothly.",
  },
  {
    id: 4,
    question: "Can I Customize My Website According To My Business Needs?",
    answer:
      "Absolutely! We specialize in creating custom websites that cater to your business's specific needs. Whether you need a custom design, unique functionality, or specialized features, we will work with you to create a tailored solution that aligns with your business goals.",
  },
  {
    id: 5,
    question: "Do You Offer SEO Services As Part Of Your Web Development?",
    answer:
      "Yes, we offer comprehensive SEO services as part of our web development process. Our SEO services include keyword optimization, meta tag optimization, URL structure improvements, content creation, and site performance optimization to help improve your website's search engine rankings.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="font-inter py-32">
      <div className="max-w-[940px] mx-auto px-4">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-0 lg:leading-12 text-[#0A2C8C] text-center">
          Frequently Asked Questions
        </h3>

        {/* accordion */}
        <div className="w-full max-w-4xl mx-auto space-y-4 mt-10">
          {accordionData.map((item, index) => (
            <div key={item.id} className=" font-inter">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`${
                    open === index ? "text-[#0A2C8C]" : "text-[#6D758F]"
                  } text-lg md:text-2xl font-semibold flex items-center`}
                >
                  <span className="mr-3 text-[#0A2C8C] font-semibold text-lg">
                    {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                  </span>{" "}
                  {item.question}
                </h3>
                <span>
                  {open === index ? (
                    <FaMinus className="text-sm text-[#6D758F]" />
                  ) : (
                    <FaPlus className="text-sm text-[#6D758F]" />
                  )}
                </span>
              </div>

              {open === index && (
                <div className="p-4 ">
                  <p className="text-[#6D758F] text-base md:text-2xl leading-7">
                    {item.answer}
                  </p>
                </div>
              )}
              <hr className="text-[#E1E4ED]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
