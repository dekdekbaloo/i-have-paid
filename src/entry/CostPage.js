import React, { useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import categories, { getCategoryLabel } from './categories'
import './CostPage.css'
import { withEntry } from './entryContext'
import EntryWrapper from './EntryWrapper'

export default withEntry(
  withRouter(function CostPage({ history, entry }) {
    const inputRef = useRef(null)
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])

    const {
      value: { category, cost },
      actions: { setCost, submitEntry }
    } = entry

    const handleChange = e => {
      setCost(Number(e.target.value))
    }

    const categoryLabel = getCategoryLabel(category)
    const shouldDisableButton = !category || cost <= 0

    return (
      <EntryWrapper
        className="cost-page"
        title={`HOW MUCH FOR ${categoryLabel}?`}
      >
        <div className="cost-page__content">
          <input
            id="cost"
            value={cost || ''}
            type="number"
            onChange={handleChange}
            pattern="[0-9]*"
            ref={inputRef}
          />
          <br />
          <button onClick={submitEntry} disabled={shouldDisableButton}>
            DONE ✅
          </button>
        </div>
      </EntryWrapper>
    )
  })
)
