import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function MainPage() {
  return (
<div className='flex flex-col'>
    <Hero/>
    <Service/>
    <Projects/>
    
    
    </div>
  )
}
