import React from 'react'
import { withRouter } from 'react-router-dom'
import categories from './categories'
import './CategoryPage.css'
import BackButton from '../ui-kit/BackButton'
import Select from '../ui-kit/Select'
import { withEntry } from './entryContext'

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
      <div className="category-page">
        <BackButton />
        <h1>I HAVE PAID FOR</h1>
        <div className="category-page__input-wrapper">
          <Select
            options={categories}
            value={category}
            onChange={handleChange}
          />
        </div>
      </div>
    )
  })
)
