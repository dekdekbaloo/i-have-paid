import React from 'react'
import { Link } from 'react-router-dom'
import { getEntries } from './entry'
import { getCategoryLabel } from './categories'

import './EntriesPage.css'

export default function EntriesPage() {
  const entries = getEntries()
  const total = entries.reduce((sum, { cost }) => sum + cost, 0)

  return (
    <div className="entries-page">
      <div className="entries-page__header">
        <h1>Expenses</h1>
        <Link to="/" className="entries-page__plus">
          <button>➕</button>
        </Link>
      </div>
      <div className="entries-page__content">
        {entries.map(({ category, cost, date }) => (
          <div className="entries-page__item">
            <div className="entries-page__item-category-and-date">
              <div className="entries-page__item-category">
                {getCategoryLabel(category)}
              </div>
              <div className="entries-page__item-date">
                {new Date(date).toLocaleDateString()}
              </div>
            </div>
            <div className="entries-page__item-cost">{cost}</div>
          </div>
        ))}
      </div>
      <div className="entries-page__footer">
        <div>Total {total}</div>
      </div>
    </div>
  )
}
