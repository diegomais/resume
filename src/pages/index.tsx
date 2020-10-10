import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import Services from '../components/services'
import Slider from '../components/slider'

const HomePage: React.FC = () => (
  <>
    <div className="KW_progressContainer">
      <div className="KW_progressBar"></div>
    </div>
    <div className="page">
      <Nav active="home" />

      <div id="colorlib-page">
        <Header />
        <Slider />
        <Services />
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default HomePage
