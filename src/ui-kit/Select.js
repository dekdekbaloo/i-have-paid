import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Select.module.scss'

export default function Select({
  className,
  options,
  onChange,
  value: currentValue
}) {
  const change = value => () => {
    onChange(value)
  }

  return (
    <div className={cx(styles.select, className)}>
      {options.map(({ value, label }) => (
        <div
          key={value}
          className={cx(styles.option, value === currentValue && styles.active)}
          onClick={change(value)}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}
