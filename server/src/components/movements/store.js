const { Movement, Category } = require('../../db')

const getAll = async () => {
  try {
    const movements = await Movement.findAll({
      include: {
        model: Category,
        attributes: ['name']
      }
    })
    return movements
  } catch (error) { return (error) }
}

const addMovement = async (concept, date, category, amount, type) => {
  try {
    const newMovement = await Movement.create({
      concept,
      date,
      amount,
      type
    })

    const newMovementCategory = await Category.findOne({
      where: { name: category }
    })

    newMovementCategory.addMovement(newMovement)
    return ('Movement was added')
  } catch (error) { return (error) }
}

const modifyMovement = async (movementID, concept, date, category, amount) => {
  try {
    const editedMovement = await Movement.findByPk(movementID)
    if (concept) editedMovement.concept = concept
    if (date) editedMovement.date = date
    if (amount) editedMovement.amount = amount
    editedMovement.save()

    if (category) {
      const newCategory = await Category.findOne({
        where: { name: category }
      })
      newCategory.addMovement(editedMovement)
    }

    return `Movement ${movementID} has been modified`
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteMovement = async (id) => {
  try {
    await Movement.destroy({
      where: { id }
    })
    return `Movement ${id} has been deleted`
  } catch (err) { return err }
}

module.exports = {
  getAll,
  addMovement,
  modifyMovement,
  deleteMovement
}
