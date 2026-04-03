// import { useEffect, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link, NavLink, useLocation } from "react-router-dom";

// const navItems = [
//   { id: "home", title: "Home", path: "/" },
 
//   { id: "services", title: "Our Services", path: "/services" },
//    { id: "projects", title: "Projects", path: "/projects" }
// ];

// export default function Navbar() {
//   const [active, setActive] = useState(navItems[0].id);

//   const location = useLocation();

//   useEffect(() => {
//     const current = navItems.find((item) => item.path === location.pathname);
//     if (current) {
//       setActive(current.id);
//     }
//   }, [location.pathname]);

//   return (
//     <div className="w-full z-99 md:px-20 fixed top-0 h-20 backdrop-blur-sm flex items-center justify-center">
//       <nav className=" w-full flex items-center gap-25 justify-center  md:justify-between">
//         <div className="h-15 w-15 bg-center bg-cover bg-[url(./assets/imk21re.png)]" />
//         <GiHamburgerMenu className="ml-40 md:hidden scale-200 fill-[#154E7B]" />{" "}
//         <div className="hidden md:block sm:flex sm:items-center">
//           <div className="inline-block  gap-4">
//             {navItems.map((item) => {
//               const isActive = active === item.id;

//               return (
//                 <NavLink
//                   key={item.id}
//                   to={item.path}
//                   className="px-1.5 py-1 text-[#0F172B] font-semibold  "
//                 >{({ isActive }) => (
//       <>
//         {/* Text */}
//         <span
//           className={
//             isActive
//               ? "text-orange-500"
//               : "text-[#0F172B]"
//           }
//         >
//           {item.title}
//         </span>

//         {/* Text underline */}
//         <span
//           className={`absolute left-0 -bottom-0.5 h-0.5 bg-orange-500 transition-all duration-300 ${
//             isActive ? "w-full" : "w-0 group-hover:w-full"
//           }`}
//         />
//       </>
//     )}
// </NavLink>
//               );
//             })}
           
//           </div>{" "}
//           <div className="px-3.5 py-2 rounded-lg inline text-[#0C263F] font-bold bg-[#FE9A00] ml-15 ">
//             <Link to="/contact">Book Site Visit</Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }




import logo from "../assets/imk21re.png"; // path adjust karo
import { useEffect, useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { id: "home", title: "Home", path: "/" },
  { id: "services", title: "Our Services", path: "/services" },
  { id: "projects", title: "Projects", path: "/projects" }
];

export default function Navbar() {
  const [active, setActive] = useState(navItems[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) {
      setActive(current.id);
    }
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full z-50 md:px-20 fixed top-0 h-20 backdrop-blur-sm flex items-center justify-center">
        <nav className="w-full flex items-center justify-between md:justify-between">
          
          {/* LOGO */}
          <div className="h-15 w-15 bg-center bg-cover bg-[url(/assets/imk21re.png)]" style={{ backgroundImage:`url(${logo})`}} />

          {/* HAMBURGER */}
          <TiThMenu
            onClick={() => setIsOpen(true)}
            className="md:hidden scale-200 fill-[#154E7B] cursor-pointer"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink key={item.id} to={item.path} className="relative group font-semibold">
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-orange-500" : "text-[#0F172B]"}>
                      {item.title}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <div className="px-3.5 py-2 rounded-lg text-[#0C263F] font-bold bg-[#FE9A00]">
              <Link to="/contact">Book Site Visit</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      
      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col gap-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-right text-xl font-bold"
          >
            ✕
          </button>

          {/* NAV ITEMS */}
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold"
            >
              {({ isActive }) => (
                <span className={isActive ? "text-orange-500" : "text-[#0F172B]"}>
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}

          {/* BUTTON */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 px-4 py-2 rounded-lg text-center font-bold bg-[#FE9A00] text-[#0C263F]"
          >
            Book Site Visit
          </Link>
        </div>
      </div>
    </>
  );
}