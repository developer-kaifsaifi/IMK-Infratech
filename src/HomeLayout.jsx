import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function HomeLayout() {
  return (
    <div className='flex flex-col'><Navbar/>
    <Hero/>
    <Service/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
