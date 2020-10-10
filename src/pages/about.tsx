import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'

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
                <div className="exp mt-5 ftco-animate">
                  <h2 className="mb-4">Experience</h2>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Operations Manager <span> - Bank of Brazil</span>{' '}
                      </h4>
                      <p className="location">Camboriú - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2018 - Present</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Relationship Manager <span> - Bank of Brazil</span>{' '}
                      </h4>
                      <p className="location">
                        Balneário Camboriú - SC, Brazil
                      </p>
                    </div>
                    <div className="year">
                      <p>2017 - 2018</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        General Manager <span> - Bank of Brazil</span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2015 - 2017</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        General Manager <span> - Bank of Brazil</span>{' '}
                      </h4>
                      <p className="location">Vitor Meireles - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2011 - 2015</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Relationship Manager <span> - Bank of Brazil</span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2008 - 2011</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Relationship Manager{' '}
                        <span> - State Bank of Santa Catarina</span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2006 - 2008</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Operational Services Coordinator{' '}
                        <span> - State Bank of Santa Catarina</span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2006</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Bank Officer{' '}
                        <span> - State Bank of Santa Catarina</span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2004 - 2006</p>
                    </div>
                  </div>
                </div>
                <div className="exp mt-5 ftco-animate">
                  <h2 className="mb-4">Education</h2>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Full Stack Web Development Certification{' '}
                        <span> - freeCodeCamp</span>{' '}
                      </h4>
                      <p className="location">San Francisco - CA, USA</p>
                    </div>
                    <div className="year">
                      <p>2019</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        React Nanodegree<span> - Udacity</span>{' '}
                      </h4>
                      <p className="location">São Paulo - SP, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2018 - 2019</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Executive MBA in Financial Business
                        <span>
                          {' '}
                          - University of Valley of Sinos River - UNISINOS
                        </span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2009 - 2011</p>
                    </div>
                  </div>
                  <div className="exp-wrap py-4">
                    <div className="desc">
                      <h4>
                        Bachelor of Science in Information Systems
                        <span>
                          {' '}
                          - Metropolitan College of Blumenau -
                          FAMEBLU/UNIASSELVI
                        </span>{' '}
                      </h4>
                      <p className="location">Blumenau - SC, Brazil</p>
                    </div>
                    <div className="year">
                      <p>2004 - 2009</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 flex-column ftco-animate">
              <div className="col-md-8">
                <h2 className="mb-4">My Skills</h2>
              </div>
              <div className="row">
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>React</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '90%' }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>React Native</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '80%' }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>Redux</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '85%' }}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>Angular</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '55%' }}
                      >
                        <span>55%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>Node.js</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '60%' }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>Express</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '75%' }}
                      >
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>MongoDB</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '65%' }}
                      >
                        <span>65%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>postgreSQL</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '60%' }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>Git/Github</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '70%' }}
                      >
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>HTML/CSS</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '95%' }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>JavaScript</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '70%' }}
                      >
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>PHP</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '50%' }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>Java</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '45%' }}
                      >
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>C#</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '40%' }}
                      >
                        <span>40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-5 text-center">
                <div className="ftco-footer-widget mb-5">
                  <ul className="ftco-footer-social list-unstyled">
                    <li className="ftco-animate">
                      <a
                        href="http://www.linkedin.com/in/diegomais/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.github.com/diegomais/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-github"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="skype:diego_mais?call"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-skype"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.twitter.com/diegomais"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.facebook.com/diegomais8"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.instagram.com/diegomais"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ftco-footer-widget">
                  <h2 className="mb-3">Contact Me</h2>
                  <p>
                    Email:{' '}
                    <a href="mailto:diegomais@live.com">diegomais@live.com</a>
                  </p>
                  <p>
                    Phone: <a href="tel:+5547996168008">+55 (47) 99616-8008</a>
                  </p>
                  <p>
                    Skype: <a href="skype:diego_mais?call">diego_mais</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright &copy;
                  {JSON.stringify(new Date().getFullYear())} All rights reserved
                  | This template is made with{' '}
                  <i
                    className="icon-heart"
                    aria-hidden="true"
                    style={{ color: 'red' }}
                  ></i>{' '}
                  by{' '}
                  <a
                    href="https://colorlib.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div>
      </div>
    </div>
  </>
)

export default AboutPage
