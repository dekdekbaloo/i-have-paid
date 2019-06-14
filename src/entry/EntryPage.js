import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import CategoryPage from './CategoryPage'
import { EntryProvider, initialState } from './entryContext'
import CostPage from './CostPage'
import { saveEntry } from './entry'
import EntriesPage from './EntriesPage'

export default function EntryPage({ match, history }) {
  const [state, setState] = useState(initialState)
  return (
    <EntryProvider
      value={{
        value: state,
        actions: {
          setCategory: category => setState({ ...state, category }),
          setCost: cost => setState({ ...state, cost }),
          submitEntry: () => {
            saveEntry(state)
            setState(initialState)
            history.push('/entry')
          }
        }
      }}
    >
      <div className="entry-page">
        <Switch>
          <Route exact path={`${match.path}/`} component={EntriesPage} />
          <Route path={`${match.path}/category`} component={CategoryPage} />
          <Route path={`${match.path}/cost`} component={CostPage} />
        </Switch>
      </div>
    </EntryProvider>
  )
}

EntryPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
