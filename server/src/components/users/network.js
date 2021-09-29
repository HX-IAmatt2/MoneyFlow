const express = require('express')
const router = express.Router()
// const controller = require('./controller')

router.get('/', (req, res) => {
  console.log('soy users')
  res.send('users')
})

module.exports = router
