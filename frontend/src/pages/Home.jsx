import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import LocationSearch from "../components/Location-search"
import GSAP from '../components/GSAP'

const Home = () => {
  return (
    <div>
      <Header />
      <LocationSearch />
      <GSAP />
      <SpecialityMenu />
      <Banner />
    </div>
  )
}

export default Home