// import { error } from 'util';

const express = require('express')
const Flatsta = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Flatsta.find({})
    .then((flatstas) => {
      res.render('flatstas', {
        flatstas: flatstas})
    .catch((err) => {
      console.log(err)
    })
    })
})

router.post('/', (req, res) => {
  Flatsta.create(req.body.Flatsta)
    .then(Flatsta => {
      res.redirect(`/Flatsta/${Flatsta.title}`)
    })
})

module.exports = router
