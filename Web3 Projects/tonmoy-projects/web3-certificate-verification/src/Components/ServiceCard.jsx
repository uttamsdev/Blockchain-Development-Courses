import React from "react";
import { GiCrossedChains } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex w-full flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:scale-110 ease-in-out">
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
          We are providing the best solution for ceartificate authectication system using blockchain technology and decentralized web technologies.
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
          title="Low of Charges"
          icon={<FaEthereum fontSize={21} className="text-white" />}
          subtitle="Certificate creation and authectication process cost so little gas on our platform"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Correction Feature"
          icon={<AiFillEdit fontSize={21} className="text-white" />}
          subtitle="Admin can perform certificate correction operations."
        />
      </div>
    </div>
  </div>
);

export default Services;