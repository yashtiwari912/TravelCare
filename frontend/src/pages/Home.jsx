import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import LocationSearch from "../components/Location-search"

const Home = () => {
  return (
    <div>
      <Header />
      <LocationSearch />
      <SpecialityMenu />
      <Banner />
    </div>
  )
}

export default Home