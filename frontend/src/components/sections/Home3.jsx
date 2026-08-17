const Home3 = () => {

  return (
    <section className="bg-blue-50 min-h-fit py-16 px-5 min-w-full max-w-full space-x-5">
      <div className="flex flex-col min-h-screen max-w-[100vw] space-y-16 lg:grid xl:grid grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto lg:aspect-auto xl:aspect-[4/5] h-[45vh] lg:h-fit xl:h-fit xl:max-h-[90vh] w-auto max-w-[90vw] m-auto rounded-xl shadow-black shadow-2xl overflow-hidden">
          <img
            className="object-contain lg:object-contain xl:object-contain lg:w-auto"
            src="../images/about-img-new.png"
            alt="A Metropolitan City with a Massive Modern Complex shaped Glass Skyscraper, and a plane flying across the sky"
          />
        </div>

        <div className="flex flex-col px-10 lg:h-screen w-[90vw] lg:w-[46vw] space-y-5 lg:space-y-10 justify-center m-auto">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-medium font-heading">
            Building the Future with Precision and Trust
          </h1>

          <p className="text-base md:text-lg xl:text-lg text-black font-body text-justify">
            At Cheralite Limited, we turn ambitious visions into reality through
            innovative engineering and sustainable construction practices. Our
            dedicated team prioritizes strict safety standards and rigorous
            project management at every phase of development.
          </p>

          <div className="flex flex-col h-fit p-2 font-body space-y-5">
            {/* Item 01 */}
            <div
              className="flex space-x-7 items-center cursor-pointer"
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                01
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Award-Winning Safety Standards
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Recognized globally for strict onsite security and rigorous
                  protocols.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div
              className="flex space-x-7 items-center cursor-pointer"
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                02
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Sustainable Building Practices
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Utilizing eco-friendly materials and energy-efficient
                  engineering solutions.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div
              className="flex space-x-7 items-center cursor-pointer"
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                03
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Export Project Management
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Ensuring on-time delivery, budget adherence and quality
                  control at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3;

