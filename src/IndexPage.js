import React from 'react'
import { Link } from 'react-router-dom'

import './IndexPage.css'

export default function IndexPage() {
  return (
    <div className="index-page">
      <div>
        <h1>I HAVE JUST PAID</h1>
        <Link to="/entry/category">
          <button className="index-page__button">FOR 💬</button>
        </Link>
      </div>
    </div>
  )
}
