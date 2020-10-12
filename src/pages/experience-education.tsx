import React from 'react'
import Education from '../components/education'
import Experience from '../components/experience'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import ProgressBar from '../components/progress-bar'

const ExperienceAndEducationPage: React.FC = () => (
  <>
    <ProgressBar />
    <div className="page">
      <Nav active="contact" />

      <div id="colorlib-page">
        <Header />
        <div className="ftco-section contact-section">
          <div className="container">
            <Experience />
            <Education />
          </div>
        </div>
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default ExperienceAndEducationPage
