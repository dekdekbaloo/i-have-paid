const categories = [
  {
    value: 'food',
    label: 'FOOD 🍙'
  },
  {
    value: 'traveling',
    label: 'Traveling 🚗'
  },
  {
    value: 'shopping',
    label: 'Shopping 🛍'
  },
  {
    value: 'others',
    label: 'Others ⚙️'
  }
]

export function getCategoryLabel(categoryValue) {
  const category = categories.find(({ value }) => value === categoryValue)
  return category ? category.label : ''
}
export default categories
