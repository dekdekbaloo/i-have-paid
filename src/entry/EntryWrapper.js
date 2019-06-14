import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import BackButton from '../ui-kit/BackButton'

import styles from './EntryWrapper.module.scss'

export default function EntryWrapper({ className, title, children }) {
  return (
    <div className={cx(styles.entryWrapper, className)}>
      <BackButton />
      <h1>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

EntryWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
