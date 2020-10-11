import { GetStaticProps } from 'next'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../components/loader'
import Nav from '../components/nav'
import ProgressBar from '../components/progress-bar'
import prismic from '../lib/prismic'
import { GET_ALL_CONTACTS } from '../lib/queries'

interface Contact {
  footer: boolean
  icon: string
  label: string
  social: boolean
  target: string
  title: string
  type: string
}

interface ContactProps {
  contacts: Contact[]
}

const ContactPage: React.FC<ContactProps> = ({ contacts }) => (
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

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const { data } = await prismic.query({ query: GET_ALL_CONTACTS })

  const contacts = data.allContacts.edges.map(({ node }) => ({
    ...node,
    target: node.target.url,
    type: node._meta.uid
  }))

  return { props: { contacts } }
}
