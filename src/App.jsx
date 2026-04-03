
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './HomeLayout'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import MainPage from './pages/MainPage'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
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
)
}

