import React from 'react'
import pages from '../constants/pages'

interface NavProps {
  active: string
}

const Nav: React.FC<NavProps> = ({ active }) => (
  <nav id="colorlib-main-nav" role="navigation">
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active">
      <i />
    </a>
    <div className="js-fullheight colorlib-table">
      <div
        className="img"
        style={{ backgroundImage: 'url(images/avatar_961.jpg)' }}
      />
      <div className="colorlib-table-cell js-fullheight">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            <h1 className="mb-4">
              <a href="/" className="logo">
                Diego Mais
              </a>
            </h1>
            <ul>
              {pages.map(({ label, target, value }, index) => (
                <li className={active === value ? 'active' : ''} key={value}>
                  <a href={target}>
                    <span>
                      <small>{index < 10 ? `0${index}` : index}</small>
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
export default Nav
