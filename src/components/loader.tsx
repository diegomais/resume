import React from 'react'

const Loader: React.FC = () => (
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
        stroke="#2f89fc"
      />
    </svg>
  </div>
)

export default Loader
