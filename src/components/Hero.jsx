
import { SiTicktick } from "react-icons/si";
import logo from "../assets/crane.png"

import "./../App.css"

export default function Hero() {
  return (
    <div
      className="min-w-full  flex items-center justify-center min-h-screen bg-[#ffffff] 
bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)] 
bg-size-[60px_60px]"
    ><div style={{ backgroundImage:`url(${logo})`}} className=" w-50 h-50 bg-center bg-cover absolute md:left-10 md:top-120 top-50 md:scale-100 scale-75 left-1/2 md:translate-0 -translate-x-1/2 -translate-y-1/2  " />
    <h1 className="md:text-[16rem] text-8xl md:top-20 top-25 font-serif absolute left-2 md:left-5 text-[#8b8b8b1d]">IMK</h1>
    <h1 className="  md:text-[16rem] text-8xl md:bottom-5 top-60 font-serif absolute md:top-80 md:right-2 text-[#8b8b8b1d]">INFRAT</h1>
    <div></div>
      <div className="  relative flex flex-col gap-5 items-center justify-center pb-10 pt-80 md:pt-15">
        <div className="bg-[#fe980034] md:scale-100 scale-90 rounded-full border border-[#FE9A00] flex items-center justify-center gap-3 px-5 py-1.5">
          <div className="h-3 w-3 bg-[#FE9A00] rounded-full " />
          <h5 className="text-[#FE9A00]"> Trusted by 250+ Clients</h5>
        </div>
        <div>
          <h2 className="md:text-7xl text-4xl text-[#0F172B]  font-extrabold text-center">
            Solid Foundation
          </h2>
        </div>
        <div>
          <h2 className="md:text-7xl text-4xl text-[#FE9A00] font-extrabold text-center">
            Elevated Execution
          </h2>
        </div>
        <div>
          <h4 className="md:w-170 text-sm md:text-lg  min-w-full text text-[#0F172B] whitespace-pre-line text-center">
            From groundbreaking to ribbon-cutting, we deliver exceptional
            construction services with precision, quality, and unwavering
            commitment to your vision.
          </h4>
        </div>
        <div className="flex px-0 md:m-0 mt-7 md:scale-100 scale-70 items-center justify-center gap-4">
          {/* <button className="bg-[#FE9A00] rounded-md px-3  text  py-2 flex font-extrabold items-center gap-2 justify-center">
            Request An Estimate{" "}
            <span className="bg-[#0F172B] p-2 rounded-md">
              <FaArrowRight className="text-y " />
            </span>
          </button> */}
          
<button className="w-68 md:w-65 cssbuttons-io-button">
  Request An Estimate
  <div className="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="#0F172B"
      ></path>
    </svg>
  </div>
</button>

          <button className="bg-[#fe980000]  hover:cursor-pointer  text rounded-md md:px-4 md:py-3 px-0.5 hover:scale-95 transition-all ease-in-out flex items-center border border-[#0F172B] justify-center">
            View Our Work
          </button>
        </div>
        <div className="flex mt-5 items-center md:flex-row md:gap-4 flex-col justify-center gap-6 ">
          {" "}
          <span className="flex gap-2 items-center justify-center">
            <SiTicktick className="text-y" />
            Licensed & Insured
          </span>
          <span className="flex gap-2 items-center justify-center">
            <SiTicktick className="text-y" />
            25+ Years Experience
          </span>
          <span className="flex gap-2 items-center justify-center">
            <SiTicktick className="text-y" />
            On-Time Delivery
          </span>
        </div>
      </div>
    </div>
  );
}
