import React from 'react'

const Slider: React.FC = () => (
  <section className="home-slider owl-carousel js-fullheight">
    <div className="slider-item js-fullheight">
      <div className="overlay"></div>
      <div className="container">
        <div
          className="row slider-text align-items-center text-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div
            className="col-md-12 ftco-animate"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <p>
              <a href="#" className="scroll">
                Hello! I&apos;m
              </a>
            </p>
            <h1
              className="mb-3"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Diego Mais
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item js-fullheight">
      <div className="overlay"></div>
      <div className="container">
        <div
          className="row slider-text align-items-center text-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div
            className="col-md-12 ftco-animate"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <p>
              <a href="#" className="scroll">
                I&apos;m
              </a>
            </p>
            <h1
              className="mb-3"
              data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
            >
              A Full Stack Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Slider
