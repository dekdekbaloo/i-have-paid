import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './BackButton.module.scss'

export default withRouter(function BackButton({ history }) {
  return (
    <button className={styles.backButton} onClick={history.goBack}>
      ↩️
    </button>
  )
})
