import React from "react";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <section className="min-h-fit flex flex-col-reverse items-center justify-center gap-16 py-20 px-7 lg:px-16 lg:grid md:grid-cols-2">
      <article className="flex flex-col items-start gap-7 z-10">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold font-heading">
          <h1 className="text-[#1A1C1E]">Professional.</h1>
          <h1 className="text-[#1A1C1E]">Innovative.</h1>
          <h1 className="text-[#003299]">Trusted.</h1>
        </div>
        <p className="font-body sm:text-lg sm:max-w-[70%] lg:max-w-[80%]">
          Cheralite Limited is a dynamic and innovative general contracting
          company committed to delivering high-quality construction,
          engineering, procurement, and project management services.
        </p>
        <div className="hover:scale-105 active:scale-95 transition">
        <Link
          className="text-white bg-[#1A1C1E] py-3 px-4 rounded-md"
          to="/projects"
        >
          View Our Projects
        </Link>
        </div>
      </article>

      {/* === Crane Images ===*/}
      <div className="flex gap-4 w-[65vw] lg:w-full lg:min-h-[80vh] justify-center items-center">
        <div
          className="overflow-hidden h-[25vh] md:h-[40vh] lg:h-[45vh] w-1/3 bg-cover bg-left bg-scroll lg:bg-fixed lg:bg-center rounded"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
        ></div>
        <div
          className="overflow-hidden h-[40vh] md:h-[60vh] lg:h-[70vh] w-1/3 bg-cover bg-center bg-scroll lg:bg-fixed lg:bg-center rounded"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
        ></div>
        <div
          className="overflow-hidden h-[25vh] md:h-[40vh] lg:h-[45vh] w-1/3 bg-cover bg-right bg-scroll lg:bg-fixed lg:bg-center rounded"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
        ></div>
      </div>
    </section>
  );
};

export default Home1;
