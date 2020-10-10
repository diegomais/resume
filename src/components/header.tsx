import React from 'react'

const Header: React.FC = () => (
  <header className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="colorlib-navbar-brand">
          <a className="colorlib-logo" href="/">
            <span
              className="logo-img"
              style={{ backgroundImage: 'url(images/avatar_479.jpg)' }}
            />
            Diego Mais
          </a>
        </div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
          <i />
        </a>
      </div>
    </div>
  </header>
)

export default Header
