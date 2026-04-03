
import "./swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import logo from "../assets/beam.png"
// Import Swiper styles
import 'swiper/css';
export default function Projects() {
  return (
    <div className="w-full md:py-20 h-670 px-10 md:px-10 md:h-760 relative bg-[#ffffff]">
          <div style={{ backgroundImage:`url(${logo})`}} className=" bg-center bg-cover absolute top-40 left-1/2 md:left-[2%] md:translate-x-0 md:translate-y-0  -translate-x-1/2 -translate-y-1/2 md:top-10 md:right-10  h-30 w-30"/>
          <div className="  relative md:px-80 flex flex-col gap-5 items-center justify-center pb-10 pt-80 md:pt-15">
            <div className=" md:scale-100 scale-90 font-extrabold  flex items-center justify-center gap-3 px-5 py-1.5">
              <h5 className=" text-[#0F172B]">OUR PORTFOLIO</h5>
            </div>
            <div>
              <h2 className="md:text-7xl text-4xl text-[#FE9A00] font-extrabold text-center">
                Featured Projects
              </h2>
            </div>
    
            <div>
              <h4 className="md:w-170 text-sm md:text-lg  min-w-full text text-[#0F172B]  whitespace-pre-line text-center">
                Explore our diverse portfolio of completed projects, showcasing our expertise across commercial, residential, and industrial construction.
              </h4>
            </div>
          </div>
          <div className="w-full md:h-130 py-15 h-100  md:px-25 flex-wrap flex items-center justify-center md:gap-5  ">
           <Swiper
      pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
      <SwiperSlide className='bg-center  bg-cover bg-[url(./assets/Garter-1.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Garter-2.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Garter-3.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Garter-4.jpg)]'></SwiperSlide>
      
    </Swiper>
    <div className='w-full gap-5 mt-10 uppercase flex items-center justify-center '><hr className='border-4 rounded-l-full font-bold w-70' /><h1 className='text-y font-extrabold text-xl text-center  md:text-5xl'>Garter Pilling Service</h1><hr className='border-4 w-70 rounded-r-full ' /></div>
            
          </div>

<div className='mt-80 pt-10 border-t-2 border-[#FE9A00]'>
  <div className="w-full md:h-130 py-15 h-100  md:px-25 flex-wrap flex items-center justify-center md:gap-5  ">
           <Swiper
      pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Concrete-1.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Concrete-2.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Concrete-3.jpg)]'></SwiperSlide>
      
    </Swiper>
    <div className='w-full gap-5 mt-10 uppercase flex items-center justify-center '><hr className='border-4 rounded-l-full font-bold w-65' /><h1 className='text-y font-extrabold  text-xl text-center  md:text-5xl'>Concrete Pilling Service</h1><hr className='border-4 w-65 rounded-r-full ' /></div>
            
          </div>
</div>
<div className='mt-80 pt-10 border-t-2 border-[#FE9A00]'>
  <div className="w-full md:h-130 py-15 h-100  md:px-25 flex-wrap flex items-center justify-center md:gap-5  ">
           <Swiper
      pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Sheet-1.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Soil-2.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Soil-1.jpg)]'></SwiperSlide>
      <SwiperSlide className='bg-center bg-cover bg-[url(./assets/Soldier-1.jpg)]'></SwiperSlide>
      
    </Swiper>
    <div className='w-full gap-5 mt-10 uppercase flex items-center justify-center '><hr className='border-4 rounded-l-full font-bold w-65' /><h1 className='text-y font-extrabold  text-xl text-center md:text-5xl'>Other Pilling Service</h1><hr className='border-4 w-65 rounded-r-full ' /></div>
            
          </div></div>

        </div>
  )
}
