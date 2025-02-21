import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import LocationSearchHome from '../components/Location-search-home'

const Home = () => {
  return (
    <div>
      <Header />
      <LocationSearchHome />
      <SpecialityMenu />
      <Banner />
    </div>
  )
}

export default Home