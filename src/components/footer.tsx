import React, { useMemo } from 'react'
import contacts from '../constants/contacts'

const Footer: React.FC = () => {
  const social = useMemo(() => contacts.filter(item => item.social), [])
  const footer = useMemo(() => contacts.filter(item => item.footer), [])

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <div className="ftco-footer-widget mb-5">
              <ul className="ftco-footer-social list-unstyled">
                {social.map(({ icon, target, type }) => (
                  <li className="ftco-animate" key={type}>
                    <a href={target} rel="noreferrer" target="_blank">
                      <span className={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ftco-footer-widget">
              <h2 className="mb-3">Contact Me</h2>
              {footer.map(({ icon, label, target, type }) => (
                <p key={type}>
                  <span className={icon} /> <a href={target}>{label}</a>
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
}

export default Footer
