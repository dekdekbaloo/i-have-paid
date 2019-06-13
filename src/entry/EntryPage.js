import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import CategoryPage from './CategoryPage'

export default function EntryPage({ match }) {
  return (
    <div className="entry-page">
      <Route path={`${match.path}/category`} component={CategoryPage} />
    </div>
  )
}

EntryPage.propTypes = {
  match: PropTypes.object.isRequired
}
