
import { Outlet } from "react-router-dom"

import ReactLenis from "lenis/react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function HomeLayout() {
  return (
    <ReactLenis root 
        options={{
          lerp: 0.1,
          smooth: true,
          smoothTouch: false,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}>
      <>
        <Navbar />
        <Outlet />   {/* 👈 yahin pages inject honge */}
       <div><Footer /></div> 
      </>
    </ReactLenis>
  )
}


