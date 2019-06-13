import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import BackButton from '../ui-kit/BackButton'

import './EntryWrapper.css'

export default function EntryWrapper({ className, title, children }) {
  return (
    <div className={cx('entry-wrapper', className)}>
      <BackButton />
      <h1>{title}</h1>
      <div className="entry-wrapper__content">{children}</div>
    </div>
  )
}

EntryWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
