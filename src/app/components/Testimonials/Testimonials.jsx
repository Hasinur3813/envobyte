"use client";
import Reviews from "../Reviews/Reviews";
import useAnimation from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { fadeUp } = useAnimation();
  return (
    <section className="py-40">
      <div className="max-w-5xl mx-auto px-4">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="font-semibold text-center text-lg md:text-xl tracking-widest text-secondary"
        >
          CLIENT REVIEWS
        </motion.p>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-2 lg:my-5"
        >
          Our Proud Clients
        </motion.h3>

        <Reviews />
      </div>
    </section>
  );
};

export default Testimonials;
