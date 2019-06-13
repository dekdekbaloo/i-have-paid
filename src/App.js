import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import IndexPage from './IndexPage'
import EntryPage from './entry/EntryPage'

function App() {
  return (
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route path="/entry" component={EntryPage} />
    </Router>
  )
}

export default App
