import React from 'react'
import services from '../constants/services'

const Services: React.FC = () => (
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span>What i do</span>
          <h2>My Services</h2>
        </div>
      </div>
      <div className="row">
        {services.map(({ icon, services, title }) => (
          <div
            className="col-md-4 d-flex align-self-stretch ftco-animate"
            key={title}
          >
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <div className="icon mb-3">
                <span className={icon} />
              </div>
              <div className="media-body">
                {services.map(item => (
                  <h3 className="heading" key={item}>
                    {item}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
