
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './HomeLayout'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import MainPage from './pages/MainPage'
import ScrollToTop from './components/ScrollToTop'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'


export default function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (API ya assets load hone tak)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (   <>
      {loading ? (
        <Loader />
      ) : (
        <>
    <ScrollToTop />
    <Routes>
      {/* Layout Route */}
   
       
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<MainPage/>} />
        <Route path="services" element={<ServicePage/>} />
        <Route path="projects" element={<ProjectPage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Route>
    </Routes>
    </>
      )}
    </>
    
)
}

