import React from "react";
import WorkProcess from "../WorkProcess/WorkProcess";
import PrimaryButton from "../Buttons/PrimaryButton";

const HowWeWork = () => {
  return (
    <section className="bg-[url(/images/work.jpeg)] py-32 relative bg-no-repeat bg-center bg-cover">
      {/* overlay color effect */}
      <div className="absolute inset-0 bg-primary/60"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* content */}
        <div>
          <p className="font-semibold text-xl tracking-widest text-light">
            HOW WE WORK
          </p>
          <h3 className="font-bold text-4xl text-light my-5">
            Our Process For Delivering Results
          </h3>
          <p className="text-base max-w-lg mx-auto text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever.
          </p>
        </div>

        <div className="relative mb-32 mt-40">
          <img
            src="/images/dashed.png"
            alt="dashed.png"
            className="w-full mt-24"
          />

          <WorkProcess
            className={"absolute -top-20 -left-10"}
            num="01"
            content={"Make An Appointment"}
          />
          <WorkProcess
            className={"absolute top-32 left-64"}
            num="02"
            content={"Meet Our Teem"}
          />
          <WorkProcess
            className={"absolute -top-24 right-64"}
            num="03"
            content={"Get Our Consultation"}
          />
          <WorkProcess
            className={"absolute top-24 -right-5"}
            num="04"
            content={"Start Project"}
          />
        </div>

        <PrimaryButton>Contact Now</PrimaryButton>
      </div>
    </section>
  );
};

export default HowWeWork;
