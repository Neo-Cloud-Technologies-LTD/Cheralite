import React from 'react'

const Home3 = () => {
  return (
    <section className="flex bg-blue-50 min-h-screen max-h-screen min-w-full max-w-full justify-between space-x-5">
      <div className="grid grid-cols-2 w-screen h-full">
      <div className="h-fit w-fit my-auto rounded-xl relative shadow-2xl overflow-hidden m-10">
        <img src="../images/about-img-new.png" alt="" className='object-contain ' />
      </div>

      <div className="flex flex-col h-screen space-y-10 justify-center">
        <h1 className="text-7xl font-heading">Building the Future with Precision and Trust</h1>

        <p className="text-lg font-body"> At Cheralite Limited, we turn ambitious visions into reality through innovative engineering and sustainable construction practices. Our dedicated team prioritizes strict safety standards and rigorous project management at every phase of development. </p>

        <div className="fle-colx h-fit p-2 font-body space-y-5">

          <div className="flex space-x-7">
            <div className="bg-blue-200 text-blue-700 flex justify-center items-center h-10 w-10 rounded-full ">01</div>
            <div className="flex-col">
              <h2 className="text-black font-semibold">Award-Winning Safety Standards</h2>
              <p className="text-gray-500">Recognized globally for strict onsite security and rigorous protocols.</p>
            </div>
          </div>

          <div className="flex space-x-7">
            <div className="bg-blue-200 text-blue-700 flex justify-center items-center h-10 w-10 rounded-full ">02</div>
            <div className="flex-col">
              <h2 className="font-semibold">Sustainable Building Practices</h2>
              <p className="text-gray-500">Utilizing eco-friendly materials and energy-efficient engineering solutions.</p>
            </div>
          </div>

          <div className="flex space-x-7">
            <div className="bg-blue-200 text-blue-700 flex justify-center items-center h-10 w-10 rounded-full ">03</div>
            <div className="flex-col">
              <h2 className="font-semibold">Export Project Management</h2>
              <p className="text-gray-500">Ensuring on-time delivery, budget adherence and quality control at every stage.</p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Home3
