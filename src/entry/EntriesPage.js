import React from 'react'
import { Link } from 'react-router-dom'
import { getEntries } from './entry'
import { getCategoryLabel } from './categories'

import styles from './EntriesPage.module.scss'

export default function EntriesPage() {
  const entries = getEntries()
  const total = entries.reduce((sum, { cost }) => sum + cost, 0)

  return (
    <div className={styles.entriesPage}>
      <div className={styles.header}>
        <h1>Expenses</h1>
        <Link to="/">
          <button>➕</button>
        </Link>
      </div>
      <div className={styles.content}>
        {entries.map(({ category, cost, date }) => (
          <div className={styles.item} key={date}>
            <div>
              <div>{getCategoryLabel(category)}</div>
              <div>{new Date(date).toLocaleDateString()}</div>
            </div>
            <div>{cost}</div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div>Total {total}</div>
      </div>
    </div>
  )
}
