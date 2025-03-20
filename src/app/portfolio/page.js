import { getServices } from "@/utils/getservices";
import React from "react";

const Page = async () => {
  const services = await getServices();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Our Amazing <span className="text-accent">Portfolio</span>
        </h1>
      </div>
    </section>
  );
};

export default Page;
