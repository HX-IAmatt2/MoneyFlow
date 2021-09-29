const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', async (req, res) => {
  res.json(await controller.getAll())
})

router.get('/last', async (req, res) => {
  res.json(await controller.getLast())
})

router.get('/balance', async (req, res) => {
  res.json(await controller.getBalance())
})

router.post('/', async (req, res) => {
  res.send(await controller.addMovement(req.body))
})

router.patch('/:movementID', async (req, res) => {
  res.send(await controller.modifyMovement(req.params.movementID, req.body))
})

router.delete('/:movementID', async (req, res) => {
  res.send(await controller.deleteMovement(req.params.movementID))
})

module.exports = router
