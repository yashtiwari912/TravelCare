import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import LocationSearchHome from '../components/Location-search-home'
import GSAP from '../components/GSAP'

const Home = () => {
  return (
    <div>
      <Header />
      <LocationSearchHome />
      <GSAP />
      <SpecialityMenu />
      <Banner />
    </div>
  )
}

export default Home