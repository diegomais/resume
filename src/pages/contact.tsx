import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import ProgressBar from '../components/progress-bar'
import contacts from '../constants/contacts'

const ContactPage: React.FC = () => (
  <>
    <ProgressBar />
    <div className="page">
      <Nav active="contact" />

      <div id="colorlib-page">
        <Header />
        <main className="ftco-section contact-section">
          <div className="container mt-5">
            <div className="row d-flex mx-1 mb-5 contact-info">
              <div className="mb-4">
                <h2 className="h3">Contact Information</h2>
              </div>
              <div className="row row-cols-3">
                {contacts.map(item => (
                  <div className="col-md-6 col-lg-4" key={item.type}>
                    <p>
                      <span className={item.icon} />{' '}
                      <a href={item.target}>{item.label}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28416.057202436077!2d-48.63710209969119!3d-27.0930704598793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10cf4da0413%3A0x231d20d09ad9775c!2sItapema%2C%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1602365326036!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden={false}
                tabIndex={0}
              />
            </div>
          </div>
        </main>
        <Footer />
        <Loader />
      </div>
    </div>
  </>
)

export default ContactPage
