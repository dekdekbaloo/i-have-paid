import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getEntries } from './entry'

import styles from './EntriesPage.module.scss'
import EntryItem from './EntryItem'

export default function EntriesPage() {
  const [activeEntryIndex, setActiveEntryIndex] = useState(-1)

  const handleEntryItemClick = i => () => {
    setActiveEntryIndex(activeEntryIndex === i ? -1 : i)
  }

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
        {entries.map((item, i) => (
          <EntryItem
            onClick={handleEntryItemClick(i)}
            key={item.date}
            item={item}
            active={activeEntryIndex === i}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <div>Total {total}</div>
      </div>
    </div>
  )
}
