const ENTRIES_KEY = 'I_HAVE_PAID_ENTRIES'

export function getEntries() {
  const data = window.localStorage.getItem(ENTRIES_KEY)
  if (data) {
    return JSON.parse(data)
  }

  return []
}

export function saveEntry(entry) {
  const date = new Date()
  const entries = getEntries()
  const newEntries = [
    ...entries,
    {
      ...entry,
      date
    }
  ]

  window.localStorage.setItem(ENTRIES_KEY, JSON.stringify(newEntries))
}

export function removeEntry(entry) {
  const entries = getEntries()
  const newEntries = entries.filter(
    ({ category, cost, date }) =>
      !(
        category === entry.category &&
        cost === entry.cost &&
        date === entry.date
      )
  )

  window.localStorage.setItem(ENTRIES_KEY, JSON.stringify(newEntries))
}
