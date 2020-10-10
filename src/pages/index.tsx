import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'

const HomePage: React.FC = () => (
  <>
    <div className="KW_progressContainer">
      <div className="KW_progressBar"></div>
    </div>
    <div className="page">
      <Nav active="home" />

      <div id="colorlib-page">
        <Header />
        <section className="home-slider owl-carousel js-fullheight">
          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row slider-text align-items-center text-center justify-content-center"
                data-scrollax-parent="true"
              >
                <div
                  className="col-md-12 ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <p>
                    <a href="#" className="scroll">
                      Hello! I&apos;m
                    </a>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                  >
                    Diego Mais
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row slider-text align-items-center text-center justify-content-center"
                data-scrollax-parent="true"
              >
                <div
                  className="col-md-12 ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <p>
                    <a href="#" className="scroll">
                      I&apos;m
                    </a>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                  >
                    A Full Stack Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section about-section">
          <div className="container">
            <div className="row d-flex" data-scrollax-parent="true">
              <div
                className="col-md-4 author-img"
                style={{ backgroundImage: 'url(images/avatar_867.jpg)' }}
                data-scrollax=" properties: { translateY: '-70%'}"
              />
              <div className="col-md-2" />
              <div className="col-md-6 wrap ftco-animate">
                <div>
                  <div className="about-desc">
                    <h1 className="bold-text">About</h1>
                  </div>
                  <div className="p-5">
                    <h2 className="mb-5">Hi! I&apos;m Diego Mais</h2>
                    <p>
                      I&apos;m a Full Stack Developer with a Bachelor degree in
                      Information Systems and an Executive MBA in Financial
                      Business.
                    </p>
                    <p>
                      I&apos;ve always found coding intuitive and have pushed
                      myself to learn the most effective ways to achieve a
                      result.
                    </p>
                    <p>
                      I&apos;m fast learner and can quickly integrate into a
                      team so I can provide value to the company and the
                      costumers.
                    </p>
                    <p>
                      <a href="assets/diego_mais_-_resume.pdf" target="_blank">
                        Checkout my resume
                      </a>
                    </p>
                    <ul className="ftco-footer-social list-unstyled mt-4">
                      <li>
                        <a
                          href="http://www.linkedin.com/in/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.github.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-github" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="skype:diego_mais?call"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-skype" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.twitter.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.facebook.com/diegomais8"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.instagram.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                    <div>
                      <h5>Contact me</h5>
                      <p>
                        Email:{' '}
                        <a href="mailto:diegomais@live.com">
                          diegomais@live.com
                        </a>
                      </p>
                      <p>
                        Phone:{' '}
                        <a href="tel:+5547996168008">+55 (47) 99616-8008</a>
                      </p>
                      <p>
                        Skype: <a href="skype:diego_mais?call">diego_mais</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span>What i do</span>
                <h2>My services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                  <div className="icon mb-3">
                    <span className="icon-code"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Front End</h3>
                    <h3 className="heading">Client Software</h3>
                    <h3 className="heading">Responsive Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                  <div className="icon mb-3">
                    <span className="icon-gears"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Back End</h3>
                    <h3 className="heading">Server Software</h3>
                    <h3 className="heading">Prototyping</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                  <div className="icon mb-3">
                    <span className="icon-layers"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Mobile App</h3>
                    <h3 className="heading">Mobile Software</h3>
                    <h3 className="heading">UI/UX Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default HomePage
