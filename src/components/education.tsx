import React from 'react'
import education from '../constants/education'

const Education: React.FC = () => (
  <div className="exp mt-5 ftco-animate">
    <h2 className="mb-4">Education</h2>
    {education.map(item => (
      <div className="exp-wrap py-4" key={item.school}>
        <div className="desc">
          <h4>
            {item.degree}, {item.fieldOfStudy} <span> – {item.school}</span>
          </h4>
          <p className="location">{item.location}</p>
        </div>
        <div className="year">
          <p>
            {item.startYear === item.endYear
              ? item.startYear
              : `${item.startYear} – ${item.endYear || 'Not complete'}`}
          </p>
        </div>
      </div>
    ))}
  </div>
)

export default Education
