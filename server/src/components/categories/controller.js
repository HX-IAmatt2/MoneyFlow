const store = require('./store')

const getAll = async () => {
  const categories = await store.getAll()
  return categories.map(category => category.name)
}

module.exports = {
  getAll
}
