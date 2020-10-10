import React from 'react'
import experience from '../constants/experience'

const Experience: React.FC = () => (
  <div className="exp mt-5 ftco-animate">
    <h2 className="mb-4">Experience</h2>
    {experience.map(item => (
      <div className="exp-wrap py-4" key={item.startDate}>
        <div className="desc">
          <h4>
            {item.title} <span> – {item.company}</span>
          </h4>
          <p className="location">{item.location}</p>
        </div>
        <div className="year">
          <p>
            {item.startDate} – {item.endDate || 'Present'}
          </p>
        </div>
      </div>
    ))}
  </div>
)

export default Experience
