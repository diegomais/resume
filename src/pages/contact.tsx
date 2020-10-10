import React from 'react'
import Nav from '../components/nav'

const ContactPage: React.FC = () => (
  <>
    <div className="KW_progressContainer">
      <div className="KW_progressBar"></div>
    </div>
    <div className="page">
      <Nav active="contact" />

      <div id="colorlib-page">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colorlib-navbar-brand">
                  <a className="colorlib-logo" href="index.html">
                    <span
                      className="logo-img"
                      style={{ backgroundImage: 'url(images/avatar_479.jpg)' }}
                    ></span>
                    Diego Mais
                  </a>
                </div>
                <a
                  href="#"
                  className="js-colorlib-nav-toggle colorlib-nav-toggle"
                >
                  <i></i>
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="ftco-section contact-section">
          <div className="container mt-5">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div className="col-md-6">
                <p>
                  <span>Location:</span> <a href="#">Blumenau - SC, Brazil</a>
                </p>
                <p>
                  <span>Phone:</span>{' '}
                  <a href="tel:+5547996168008">+55 (47) 99616-8008</a>
                </p>
                <p>
                  <span>Email:</span>{' '}
                  <a href="mailto:diegomais@live.com">diegomais@live.com</a>
                </p>
                <p>
                  <span>Skype:</span>{' '}
                  <a href="skype:diego_mais?call">diego_mais</a>
                </p>
                <p>
                  <span>Twitter:</span>{' '}
                  <a href="http://www.twitter.com/diegomais">@diegomais</a>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span>Website:</span>{' '}
                  <a href="http://diegomais.github.io">diegomais.github.io</a>
                </p>
                <p>
                  <span>Github:</span>{' '}
                  <a href="http://github.com/diegomais">github.com/diegomais</a>
                </p>
                <p>
                  <span>LinkedIn:</span>{' '}
                  <a href="http://www.linkedin.com/in/diegomais">
                    linkedin.com/in/diegomais
                  </a>
                </p>
                <p>
                  <span>Facebook:</span>{' '}
                  <a href="http://www.facebook.com/diegomais8">
                    facebook.com/diegomais8
                  </a>
                </p>
                <p>
                  <span>Instagram: </span>{' '}
                  <a href="http://www.instagram.com/diegomais">
                    instagram.com/diegomais
                  </a>
                </p>
              </div>
            </div>
            <div className="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227807.2014815671!2d-49.23918711962158!3d-26.856247672824423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e408b5c3095%3A0xacfb8520bc1a7644!2sBlumenau%2C+SC!5e0!3m2!1spt-BR!2sbr!4v1556379111618!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
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
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.github.com/diegomais/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-github" />
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="skype:diego_mais?call"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-skype" />
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.twitter.com/diegomais"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="http://www.facebook.com/diegomais8"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="icon-facebook" />
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
                  | This template is made
                  <i
                    className="icon-heart"
                    aria-hidden="true"
                    style={{ color: 'red' }}
                  ></i>{' '}
                  by
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

export default ContactPage
