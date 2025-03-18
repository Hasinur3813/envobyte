import React from "react";

const HowWeWork = () => {
  return (
    <section className="bg-[url(/images/work.jpeg)] py-32 relative bg-no-repeat bg-center bg-cover ">
      {/* overlay color effect */}
      <div className="absolute inset-0 bg-primary/40"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <p className="font-semibold text-xl tracking-widest text-light">
          HOW WE WORK
        </p>
        <h3 className="font-bold text-4xl text-light my-5">
          Our Process For Delivering Results
        </h3>
        <p className="text-base text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
