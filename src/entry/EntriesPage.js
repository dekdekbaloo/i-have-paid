import React from 'react'
import { getEntries } from './entry'
import { getCategoryLabel } from './categories'

export default function EntriesPage() {
  const entries = getEntries()

  return (
    <div className="entries-page">
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
  )
}
