import React from 'react'
import { withRouter } from 'react-router-dom'
import categories from './categories'
import './CategoryPage.css'
import Select from '../ui-kit/Select'
import { withEntry } from './entryContext'
import EntryWrapper from './EntryWrapper'

export default withEntry(
  withRouter(function CategoryPage({ history, entry }) {
    const {
      value: { category },
      actions: { setCategory }
    } = entry

    const handleChange = value => {
      setCategory(value)
      history.push('/entry/cost')
    }

    return (
      <EntryWrapper className="category-page" title="I HAVE PAID FOR">
        <Select options={categories} value={category} onChange={handleChange} />
      </EntryWrapper>
    )
  })
)
