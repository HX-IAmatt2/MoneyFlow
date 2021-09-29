const { Category } = require('../../db')

const getAll = async () => {
  const categories = await Category.findAll()
  return categories
}

module.exports = {
  getAll
}
