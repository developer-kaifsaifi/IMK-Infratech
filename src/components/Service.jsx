import React from "react";
import { CiRuler } from "react-icons/ci";
import { GiCargoCrane, GiIBeam } from "react-icons/gi";
import { HiScale } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { PiBuilding, PiBuildings, PiShovelBold } from "react-icons/pi";

export default function Service() {
  return (

    <div className="w-full px-10 md:px-10 h-450 md:h-220 relative bg-[#ffffff]">
      <div className="bg-[url(./assets/worker.png)] bg-center bg-cover absolute top-50 left-1/2 md:left-[90%] md:translate-x-0 md:translate-y-0  -translate-x-1/2 -translate-y-1/2 md:top-10 md:right-10  h-30 w-30"/>
      <div className="  relative md:px-80 flex flex-col gap-5 items-center justify-center pb-10 pt-80 md:pt-15">
        <div className=" md:scale-100 scale-90 font-extrabold  flex items-center justify-center gap-3 px-5 py-1.5">
          <h5 className="text-[#FE9A00]"> WHAT WE OFFER</h5>
        </div>
        <div>
          <h2 className="md:text-7xl text-4xl text-[#0F172B] font-extrabold text-center">
            Comprehensive Construction Services
          </h2>
        </div>

        <div>
          <h4 className="md:w-170 text-sm md:text-lg  min-w-full text text-[#0F172B]  whitespace-pre-line text-center">
            From groundbreaking to ribbon-cutting, we deliver exceptional
            construction services with precision, quality, and unwavering
            commitment to your vision.
          </h4>
        </div>
      </div>
      <div className="w-full h-130 py-15  flex-wrap flex items-center justify-center md:gap-5  ">
        <div className="border p-5 group flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10 w-10 flex group-hover:bg-[#ffffff] items-center justify-center rounded-lg bg-amber-400 ">
            <PiBuildings className=" group-hover:fill-[#FE9A00] scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold  text-xl">Commercial Construction</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Full-scale commercial projects including offices, retail spaces,
              and industrial facilities.
            </h6>
          </div>
        </div>
         <div className="border p-5 flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10  w-10 flex items-center justify-center rounded-lg bg-amber-400 ">
            <IoHomeOutline className="scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold text-xl">Residential Building</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Custom homes and residential developments built to the highest standards of quality.
            </h6>
          </div>
        </div>
         <div className="border p-5 flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10  w-10 flex items-center justify-center rounded-lg bg-amber-400 ">
            <CiRuler className="scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold text-xl">Design & Planning</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Comprehensive architectural planning and design services for projects of any scale.
            </h6>
          </div>
        </div>
         <div className="border p-5 flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10  w-10 flex items-center justify-center rounded-lg bg-amber-400 ">
            <PiShovelBold  className="scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold text-xl">Piling Service</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Services which include Concrete Piling Service, Sheet Piling Contractors and Soldier Piling Service.
            </h6>
          </div>
        </div>

        <div className="border p-5 flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10  w-10 flex items-center justify-center rounded-lg bg-amber-400 ">
            <GiIBeam className="scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold text-xl">Soldier Garter Piling Service</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Service Provider of a wide range of services which include Garter Piling Service.
            </h6>
          </div>
        </div>


        <div className="border p-5 flex-1 scale-80 md:scale-100 flex flex-col gap-4 border-[#fe98008a]  transition-all ease-in-out hover:scale-78 md:hover:scale-102 hover:bg-[#fbce1c36] hover:border-[#FE9A00] rounded-lg ">
          <div className="h-10  w-10 flex items-center justify-center rounded-lg bg-amber-400 ">
            <GiCargoCrane className="scale-150" />
          </div>
          <div>
            <h4 className="text font-extrabold text-xl">Soil Nailing Service</h4>
          </div>
          <div>
            <h6 className="text w-100 font-semibold">
              Offering you a complete choice of services which include Soil Nailing Critical Service.
            </h6>
          </div>
        </div>


        
        
      </div>
    </div>
  );
}
