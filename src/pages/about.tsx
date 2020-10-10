import React from 'react'
import Education from '../components/education'
import Experience from '../components/experience'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import Skills from '../components/skills'

const AboutPage: React.FC = () => (
  <>
    <div className="KW_progressContainer">
      <div className="KW_progressBar"></div>
    </div>
    <div className="page">
      <Nav active="about" />

      <div id="colorlib-page">
        <Header />
        <section className="ftco-section about-section">
          <div className="container">
            <div className="row d-flex my-5" data-scrollax-parent="true">
              <div
                className="col-md-4 author-img"
                style={{ backgroundImage: 'url(images/avatar_867.jpg)' }}
                data-scrollax=" properties: { translateY: '-70%'}"
              ></div>
              <div className="col-md-2"></div>
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
                      <a
                        href="assets/diego_mais_-_resume.pdf"
                        rel="noreferrer"
                        target="_blank"
                      >
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
                          <span className="icon-linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.github.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-github"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="skype:diego_mais?call"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-skype"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.twitter.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.facebook.com/diegomais8"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.instagram.com/diegomais"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="icon-instagram"></span>
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
              <div className="row d-flex justify-content-end mt-5">
                <div className="col-md-10">
                  <div className="profile ftco-animate">
                    <h2 className="mb-4">Summary</h2>
                    <h4 className="mb-4">
                      I aim to transform requirements into features that help
                      you to boost your business.
                    </h4>
                    <p>
                      I’ve experience with React, React Native, Redux, Node.js,
                      PHP, Java and C#. I&apos;ve strong expertise with HTML,
                      CSS, JavaScript, ES5, Express.js, Bootstrap, WordPress,
                      Git/Github, postgreSQL, MongoDB and consuming RESTful
                      APIs.
                    </p>
                    <p>
                      I know how to work as a team and I have good communication
                      skills. I&apos;m able to solve problems on my own, without
                      being afraid to ask for help if needed.
                    </p>
                    <p>
                      I’m passionate about learning, trying new things and
                      sharing knowledge. So I adapt quickly to new technologies
                      and requirements change. I&apos;ll make difference through
                      my creative solutions.{' '}
                    </p>
                  </div>
                </div>

                <Experience />

                <Education />
              </div>
            </div>

            <Skills />
          </div>
        </section>
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default AboutPage
