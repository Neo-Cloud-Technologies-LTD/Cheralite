import React from "react";

const About3 = () => {
  return (
    <section className="flex flex-col bg-[#FEFFFF] items-center justify-center py-20 lg:py-40 gap-16">
      <div className="flex flex-col gap-5 text-center px-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-heading">
          Driven by Purpose
        </h1>
        <p className="text-base lg:text-lg font-body">
          The core tenets that guide every blueprint we draw and every beam we
          lay.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 max-w-[80vw] m-auto">
        {/* Our Mission */}
        <div className="flex flex-col justify-center relative gap-5 p-12 bg-[#FAF9F8] border border-gray-300 lg:max-w-[36vw] lg:max-h-[300px] rounded">
          <h1 className="flex items-center gap-4 font-heading text-3xl font-medium">
            <span>
              <svg className="h-8 w-8">
                <use href="/icons.svg#icon-flag"></use>
              </svg>
            </span>
            Our Mission
          </h1>
          <p className="text-base lg:text-lg font-normal text-[#434552] z-10">
            To deliver exceptional construction and architectural services
            through rigorous project management, innovative engineering, and an
            unyielding commitment to safety and sustainability.
          </p>
          <svg className="absolute h-28 text-[#E2E2E9] top-4 -right-12 -z-0">
            <use href="/icons.svg#bg-compass"></use>
          </svg>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col justify-center relative gap-5 p-12 text-white bg-[#24272A] border border-gray-300 lg:max-w-[36vw] lg:max-h-[300px] rounded">
          <h1 className="flex items-center gap-4 font-heading text-3xl font-medium">
            <span>
              <svg className="h-8 w-8">
                <use href="/icons.svg#icon-compass"></use>
              </svg>
            </span>
            Our Vision
          </h1>
          <p className="text-base lg:text-lg font-normal text-[#A4A8AB] z-10">
            To be the premier architectural construction firm globally
            recognized for shaping resilient, inspiring, and enduring built
            environments that elevate the human experience.
          </p>
          <svg className="absolute h-28 text-[#3A3D3F] top-0 -right-10 -z-0">
            <use href="/icons.svg#bg-eye"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About3;
