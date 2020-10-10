import React, { useCallback, useMemo } from 'react'
import skills from '../constants/skills'

const Skills: React.FC = () => {
  const min = useMemo(() => {
    const values = skills.map(({ value }) => value)
    return Math.min(...values)
  }, [])

  const max = useMemo(() => {
    const values = skills.map(({ value }) => value)
    return Math.max(...values)
  }, [])

  const calcTime = useCallback(value => {
    if (value === 0) return '6 months'
    if (value === 1) return '1 year'
    if (value === 2) return '2 years'
    return '+3 years'
  }, [])

  return (
    <div className="row mt-5 flex-column ftco-animate">
      <div className="col-md-8">
        <h2 className="mb-4">Skills</h2>
      </div>
      <div className="row row-cols-2">
        {skills.map(({ label, value }) => (
          <div
            className="col-lg-6 animate-box"
            data-animate-effect="fadeInRight"
            key={value}
          >
            <div className="progress-wrap">
              <h4>{label}</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={value}
                  aria-valuemin={min}
                  aria-valuemax={max}
                  style={{ width: `${((value + 1) / (max + 1)) * 100}%` }}
                >
                  <span>{calcTime(value)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
