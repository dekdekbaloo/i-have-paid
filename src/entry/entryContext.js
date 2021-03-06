import React, { createContext } from 'react'

export const initialState = {
  category: '',
  cost: 0
}

const entryContext = {
  value: initialState,
  actions: {
    setCategory() {},
    setCost() {},
    submitEntry() {},
    removeEntry() {}
  }
}

const { Consumer: EntryConsumer, Provider: EntryProvider } = createContext(
  entryContext
)

export function withEntry(BaseComponent) {
  return props => (
    <EntryConsumer>
      {({ value, actions }) => (
        <BaseComponent {...props} entry={{ value, actions }} />
      )}
    </EntryConsumer>
  )
}

export { EntryConsumer, EntryProvider }
