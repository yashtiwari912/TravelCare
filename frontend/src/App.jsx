import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import HospitalBedManagement from './pages/HospitalBedManagement'
import HospitalList from './pages/HospitalList'
import SosButton from './components/SosButton'
import DiseasesItenary from './pages/DiseasesItenary'
import DiseaseDetails from './pages/DiseaseDetails'
import Flowchart from './pages/Flowchart'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] relative'>
      {/* <SosButton /> */}
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/hospital-beds' element={<HospitalBedManagement />} />
        <Route path='/hospital-list' element={<HospitalList />} />
        <Route path='/diseases-itenary' element={<DiseasesItenary />} />
        <Route path='/disease-details' element={<DiseaseDetails />} />
        <Route path='/flowchart' element={<Flowchart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App