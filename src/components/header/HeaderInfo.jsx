import Image from "next/image";
import React from "react";
import img1 from "../../../public/img1.jpeg";
import img2 from "../../../public/img2.webp";
import img3 from "../../../public/img3.jpeg";
import { CiClock2 } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { LiaSitemapSolid } from "react-icons/lia";



const HeaderInfo = () => {
  return (
    <div className="w-full lg:my-24 my-12 ">
      <div className="container bg-blue-900 p-16 rounded-[30px] shadow-xl  flex lg:justify-between flex-col lg:flex-row text-2xl items-center gap-16 ">
        <div className="flex flex-col  justify-center text-white items-center gap-2 text-blue lg:text-[20px] text-[18px]  ">
          <FaTruckFast size={30} className='font-extrabold  text-center' />
          <h1 className="">1500+</h1>
          <p className="">Product delivery</p>
        </div>
        <div className="flex flex-col  justify-center text-white items-center gap-2 text-blue lg:text-[20px] text-[18px]">
          <SiCoinmarketcap size={30} className='font-extrabold text-white text-center' />
          <h1 className="">2000+</h1>
          <p className="">Sale per month</p>
        </div>
        <div className="flex flex-col  justify-center text-white items-center gap-2 text-blue lg:text-[20px] text-[18px]">
          <GiProgression size={30} className='font-extrabold text-white  text-center' />
          <h1 className="">25%</h1>
          <p className="">Growth per year</p>
        </div>
        <div className="flex flex-col  justify-center text-white items-center gap-2 text-blue lg:text-[20px] text-[18px]">
          <LiaSitemapSolid size={30} className='font-extrabold text-white  text-center' />
          <h1 className="">100+</h1>
          <p className="">Branches </p>
        </div>
        
        
    
      </div>
    </div>
  );
};

export default HeaderInfo;
