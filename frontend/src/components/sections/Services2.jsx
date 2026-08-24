import React from "react";

const services = [
  {
    id: 1,
    flexdir: "flex-col",
    bgColor: "bg-[#FAF9F8]",
    titleColor: "text-[#002068]",
    bodyColor: "text-[#3A3D3F]",
    icon: "/icons.svg#figma-building",
    iconStyles: "bg-[#24272A] text-white",
    title: "Building Construction",
    description: "From commercial skyscrapers to industrial complexes, our construction division executes large-scale projects with unwavering precision. We integrate advanced engineering methodologies to ensure structural integrity and timely delivery.",
    imgUrl: "images/building-construction.png",
    hasbtn: false,
  },
  {
    id: 2,
    flexdir: "flex-col",
    bgColor: "bg-[#24272A]",
    titleColor: "text-white",
    bodyColor: "text-[white]",
    icon: "/icons.svg#bg-compass",
    iconStyles: "bg-[#002068] text-white",
    title: "Architectural Design",
    description: "Our design studio bridges the gap between aesthetic vision and structural reality. We create blueprints that prioritize functional elegance and spatial efficiency for modern corporate environments.",
    imgUrl: "images/architectural-design.png",
    hasbtn: false,
  },
  {
    id: 3,
    flexdir: "flex-col lg:flex-row",
    bgColor: "bg-[#EEEDEC]",
    titleColor: "text-[#002068]",
    bodyColor: "text-[#3A3D3F]",
    icon: "/icons.svg#figma-gear",
    iconStyles: "bg-[#003299] text-[#89A3FF]",
    title: "Facilities Maintenance",
    description: "Ensuring the longevity and optimal performance of your assets. Our maintenance programs are preventative, comprehensive, and tailored to the specific mechanical and structural needs of high-value commercial properties.",
    imgUrl: "images/facilities-maintenance.png",
    hasbtn: true,
  },
];

const ServiceCard = ({
  flexdir,
  bgColor,
  titleColor,
  bodyColor,
  icon,
  iconStyles,
  title,
  description,
  imgUrl,
  hasbtn
}) => {
  return (
    <div className={`flex border border-gray-300 gap-5 p-10 rounded drop-shadow-2xl ${flexdir} ${bgColor}`}>
      <div className="flex flex-col gap-5">
        <span className={`${iconStyles} w-fit h-fit p-2 rounded`}>
          <svg className="h-8 w-8">
            <use href={icon} />
          </svg>
        </span>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-medium ${titleColor}`}>{title}</h1>
        <p className={`font-body ${bodyColor}`}>{description}</p>
        {hasbtn ? <button className="border border-black text-black px-5 py-2 rounded w-fit">Learn More</button> : null}
      </div>
      <img className="w-full max-h-[300px] object-cover" src={imgUrl} alt={title} />
    </div>
  );
};

const Services2 = () => {
  return (
    <section className="flex flex-col gap-10 py-10 lg:py-20 px-5 lg:px-12 bg-[#FAF9F8]">
      <div className="flex flex-col lg:grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <ServiceCard
            key={services[0].id}
            flexdir={services[0].flexdir}
            bgColor={services[0].bgColor}
            titleColor={services[0].titleColor}
            bodyColor={services[0].bodyColor}
            icon={services[0].icon}
            iconStyles={services[0].iconStyles}
            title={services[0].title}
            description={services[0].description}
            imgUrl={services[0].imgUrl}
            hasbtn={services[0].hasbtn}
          />
        </div>
        <ServiceCard
          key={services[1].id}
          flexdir={services[1].flexdir}
          bgColor={services[1].bgColor}
          titleColor={services[1].titleColor}
          bodyColor={services[1].bodyColor}
          icon={services[1].icon}
          iconStyles={services[1].iconStyles}
          title={services[1].title}
          description={services[1].description}
          imgUrl={services[1].imgUrl}
          hasbtn={services[1].hasbtn}
        />
      </div>
      <div className="">
        <ServiceCard
          key={services[2].id}
          flexdir={services[2].flexdir}
          bgColor={services[2].bgColor}
          titleColor={services[2].titleColor}
          bodyColor={services[2].bodyColor}
          icon={services[2].icon}
          iconStyles={services[2].iconStyles}
          title={services[2].title}
          description={services[2].description}
          imgUrl={services[2].imgUrl}
          hasbtn={services[2].hasbtn}
        />
      </div>
    </section>
  );
};

export default Services2;
