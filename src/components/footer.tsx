import React from 'react'
import contact from '../constants/contact'
import social from '../constants/social'

const Footer: React.FC = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-5 text-center">
          <div className="ftco-footer-widget mb-5">
            <ul className="ftco-footer-social list-unstyled">
              {social.map(({ target, value }) => (
                <li className="ftco-animate" key={value}>
                  <a href={target} rel="noreferrer" target="_blank">
                    <span className={`icon-${value}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftco-footer-widget">
            <h2 className="mb-3">Contact Me</h2>
            {contact.map(({ type, label, target, value }) => (
              <p key={value}>
                {type}: <a href={target}>{label}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy;
            {JSON.stringify(new Date().getFullYear())} All rights reserved
            template is made with{' '}
            <i
              className="icon-heart"
              aria-hidden="true"
              style={{ color: 'red' }}
            ></i>{' '}
            by{' '}
            <a href="https://colorlib.com" rel="noreferrer" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
