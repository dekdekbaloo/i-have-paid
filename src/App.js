import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.scss'
import IndexPage from './IndexPage'
import EntryPage from './entry/EntryPage'

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <Route exact path="/">
              {({ match }) => (
                <CSSTransition
                  in={!!match}
                  classNames="slide-down"
                  timeout={200}
                  unmountOnExit
                >
                  <IndexPage />
                </CSSTransition>
              )}
            </Route>
            <Route path="/entry" component={EntryPage} />
          </TransitionGroup>
        )}
      />
    </Router>
  )
}

export default App
