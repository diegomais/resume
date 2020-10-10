import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'

const ContactPage: React.FC = () => (
  <>
    <div className="KW_progressContainer">
      <div className="KW_progressBar"></div>
    </div>
    <div className="page">
      <Nav active="contact" />

      <div id="colorlib-page">
        <Header />
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
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default ContactPage
