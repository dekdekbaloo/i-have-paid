import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './Select.css'

export default function Select({ options, onChange, value: currentValue }) {
  const change = value => () => {
    onChange(value)
  }

  console.log(currentValue)
  return (
    <div className="select">
      {options.map(({ value, label }) => (
        <div
          key={value}
          className={cx(
            'select__option',
            value === currentValue && '--selected'
          )}
          onClick={change(value)}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}
