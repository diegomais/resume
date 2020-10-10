import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import ProgressBar from '../components/progress-bar'
import Services from '../components/services'
import Slider from '../components/slider'

const HomePage: React.FC = () => (
  <>
    <ProgressBar />
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
