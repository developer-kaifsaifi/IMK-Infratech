import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Projects from './components/Projects'

export default function HomeLayout() {
  return (
    <div className='flex flex-col'><Navbar/>
    <Hero/>
    <Service/>
    <Projects/>
    </div>
  )
}
