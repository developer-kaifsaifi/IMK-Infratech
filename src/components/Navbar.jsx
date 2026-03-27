import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full z-99 md:px-20 fixed top-0 h-20 backdrop-blur-sm flex items-center justify-center">
      
      <nav className=" w-full flex items-center gap-30 justify-center  md:justify-between">
        <div className="h-15 w-15 bg-center bg-cover bg-[url(./assets/imk21re.png)]" />
        <GiHamburgerMenu className="ml-40 md:hidden scale-200 fill-[#154E7B]" />{" "}
        <div className="hidden md:block sm:flex sm:items-center">
          <ul className="flex gap-2">
             <li className="px-1.5 py-1 text-[#0F172B] font-semibold  "><a href="">Home</a></li>
          
          
            <li className="px-1.5 py-1 text-[#0F172B] font-semibold "><a href="">Our Project</a></li> 
          
          
             <li className="px-1.5 py-1 text-[#0F172B] font-semibold "><a href="">Media</a></li>
          
          
             <li className="px-1.5 py-1 text-[#0F172B] font-semibold "><a href="">Contact</a></li>
          {" "}
          <div className="px-3.5 py-2 rounded-lg inline text-[#0C263F] font-bold bg-[#FE9A00] ml-15 "><a href="">Book Site Visit</a></div>
             
          </ul>

          
        </div>
      </nav>
    </div>
  );
}
