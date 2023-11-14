import React from "react";
import { GiCrossedChains } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex w-full flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color} animate-pulse border `}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex min-h-screen w-full justify-center items-center gradient-bg-services" id="Services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          Are providing
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          We are providing the best crypto currency exchange service for free and amazing
          security services
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Best Security"
          icon={<GiCrossedChains fontSize={21} className="text-white" />}
          subtitle="As we are using blockchain web 3.0 technology, our services are most secured in the market."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Free of Charges"
          icon={<FaEthereum fontSize={21} className="text-white" />}
          subtitle="We don't have a free, We let you make transactions free of charge."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Faster Transactions"
          icon={<BsClockHistory fontSize={21} className="text-white" />}
          subtitle="Using our service you can make transactions more efficient and more reliable and time consuming"
        />
      </div>
    </div>
  </div>
);

export default Services;