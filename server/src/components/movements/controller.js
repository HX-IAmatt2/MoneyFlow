const store = require('./store')
const moment = require('moment')

const getAll = async () => {
  try {
    const allMovements = await store.getAll()
    return allMovements
      .map(movement => (
        {
          id: movement.id,
          concept: movement.concept,
          amount: movement.amount,
          date: moment(movement.date).format('YYYY-MM-DD'),
          type: movement.type,
          category: movement.category.name
        }
      ))
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1
        }
        if (a.date > b.date) {
          return -1
        }
        return 0
      })
  } catch (error) { return (error) }
}

const getLast = async () => {
  try {
    const lastMovements = await store.getAll()
    return lastMovements
      .map(movement => (
        {
          id: movement.id,
          concept: movement.concept,
          amount: movement.amount,
          date: moment(movement.date).format('YYYY-MM-DD'),
          type: movement.type,
          category: movement.category.name
        }
      ))
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1
        }
        if (a.date > b.date) {
          return -1
        }
        return 0
      })
      .splice(0, 10)
  } catch (error) { return (error) }
}

const getBalance = async () => {
  try {
    let balance = 0
    const movements = await store.getAll()
    movements.forEach(movement => {
      if (movement.type === 'Income') balance = balance + movement.amount
      else balance = balance - movement.amount
    })
    return balance
  } catch (error) { return (error) }
}

const addMovement = async (body) => {
  try {
    const { concept, date, category, amount, type } = body
    return await store.addMovement(concept, date, category, amount, type)
  } catch (error) { return (error) }
}

const modifyMovement = async (movementID, body) => {
  try {
    const { concept, date, category, amount } = body
    return await store.modifyMovement(movementID, concept, date, category, amount)
  } catch (error) { return (error) }
}

const deleteMovement = async (movementID) => {
  try {
    return await store.deleteMovement(movementID)
  } catch (error) { return (error) }
}

module.exports = {
  getAll,
  getLast,
  getBalance,
  addMovement,
  modifyMovement,
  deleteMovement
}
