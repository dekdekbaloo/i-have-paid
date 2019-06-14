import React from 'react'
import PropTypes from 'prop-types'
import styles from './EntryItem.module.scss'
import { getCategoryLabel } from './categories'
import { withEntry } from './entryContext'

function EntryItem({ item, active, entry, onClick }) {
  const { category, date, cost } = item
  return (
    <div className={styles.entryItem} onClick={onClick}>
      <div>
        <div>{getCategoryLabel(category)}</div>
        <div>{new Date(date).toLocaleDateString()}</div>
      </div>
      <div className={styles.cost}>{cost}</div>
      {active && (
        <div
          className={styles.deleteButton}
          onClick={() =>
            entry.actions.removeEntry({
              category,
              date,
              cost
            })
          }
        >
          🗑
        </div>
      )}
    </div>
  )
}

EntryItem.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }),
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  entry: PropTypes.object
}

export default withEntry(EntryItem)
