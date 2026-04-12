
import { AnimatePresence, motion } from 'motion/react';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import ScrollToTop from './components/ScrollToTop';



const pageVariants = {
 initial: { opacity: 0, x: -20 },
 animate: { opacity: 1, x: 0 },
 exit: { opacity: 0, x: 20 }
};
export default function AnimatedRoutes() {
 const location = useLocation();
 return (
 <AnimatePresence mode='wait'>
    <ScrollToTop />
 <Routes location={location} key={location.pathname}>
    <Route path="/" element={<HomeLayout />}>
 <Route path='/' element={
 <motion.div variants={pageVariants}
 initial='initial' animate='animate' exit='exit'
 transition={{ duration: 0.4 }}
 >
 <MainPage />
 </motion.div>
 } />
 <Route path='/services' element={
 <motion.div variants={pageVariants}
 initial='initial' animate='animate' exit='exit'
 transition={{ duration: 0.4 }}
 >
<ServicePage/>
 </motion.div>
 } />
  <Route path='/projects' element={
 <motion.div variants={pageVariants}
 initial='initial' animate='animate' exit='exit'
 transition={{ duration: 0.4 }}
 >
<ProjectPage/>
 </motion.div>
 } />
  <Route path='/contact' element={
 <motion.div variants={pageVariants}
 initial='initial' animate='animate' exit='exit'
 transition={{ duration: 0.4 }}
 >
<ContactPage/>
 </motion.div>
 } /></Route>
 </Routes>
 </AnimatePresence>
 );
}
