import React from 'react'
import { withRouter } from 'react-router-dom'

import './BackButton.css'

export default withRouter(function BackButton({ history }) {
  return (
    <button className="back-button" onClick={history.goBack}>
      ↩️
    </button>
  )
})
