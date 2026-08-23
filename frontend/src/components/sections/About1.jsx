import React from 'react'

const About1 = () => {
  return (
    <section className="min-h-fit bg-fixed bg-cover lg:bg-contain bg-no-repeat bg-top" style={{backgroundImage: "url(/images/about1-bg.png)"}}>
      <div className="flex flex-col gap-10 h-full w-full py-20 lg:py-40 px-10 lg:px-32 backdrop-blur-sm bg-white/55">
        <div className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium">
          <h1 className="">Architectural Precision</h1>
          <h1 className="">Corporate Reliability</h1>
        </div>
        <p className="font-body text-base lg:text-xl">We build the foundation of tomorrow with uncompromising quality and visionary design.</p>
      </div>
    </section>
  )
}

export default About1
