import React from 'react'
import { Link } from 'react-router-dom'

import styles from './IndexPage.module.scss'

export default function IndexPage() {
  return (
    <div className={styles.indexPage}>
      <Link to="/entry" className={styles.entry}>
        <button>🍔</button>
      </Link>
      <div>
        <h1>I HAVE JUST PAID</h1>
        <Link to="/entry/category">
          <button className={styles.button}>FOR 💬</button>
        </Link>
      </div>
    </div>
  )
}
