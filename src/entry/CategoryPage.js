import React from 'react'
import { withRouter } from 'react-router-dom'
import categories from './categories'
import './CategoryPage.css'
import BackButton from '../ui-kit/BackButton'
import Select from '../ui-kit/Select'

export default withRouter(function CategoryPage({ history }) {
  const handleChange = value => {
    // TODO: Change state to top context
    console.log(value)
    history.push('/entry/cost')
  }

  return (
    <div className="category-page">
      <BackButton />
      <h1>I HAVE PAID FOR</h1>
      <div className="category-page__input-wrapper">
        <Select options={categories} onChange={handleChange} />
      </div>
    </div>
  )
})
