// import { error } from 'util';

const express = require('express')
const Flatsta = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/flatstas', (req, res) => {
  Flatsta.find({})
    .then((flatstas) => {
      res.render('flatstas', {
        flatstas: flatstas
      })
    .catch((err) => {
      console.log(err)
    })
    })
})

router.get('/flatstas/add', (req, res) => {
  Flatsta.find({})
    .then((flatstas) => {
      res.render('pokemon-add', {
        flatstas: flatstas
      })
    .catch((err) => {
      console.log(err)
    })
    })
})

router.get('/flatstas/:name', (req, res) => {
  let name = req.params.name
  Pokie.findOne({name: name})
    .then((pokie) => {
      res.render('pokemon-show', {
        pokie: pokie
      })
    .catch((err) => {
      console.log(err)
    })
    })
})

router.get('/pokies/edit/:name', (req, res) => {
  let name = req.params.name
  Pokie.findOne({name: name})
    .then((pokie) => {
      res.render('pokemon-edit', {
        pokie: pokie
      })
    .catch((err) => {
      console.log(err)
    })
    })
})

router.post('/pokies', (req, res) => {
  Pokie.create(req.body.Pokie)
    .then(pokie => {
      res.redirect(`/pokies/${pokie.name}`)
    })
})

router.delete('/pokies/:name', (req, res) => {
  Pokie.findOneAndRemove({name: req.params.name})
    .then(() => {
      res.redirect('/')
    })
})

router.put('/pokies/:name', (req, res) => {
  let name = req.params.name
  Pokie.findOneAndUpdate({name: name}, req.body.Pokie, {new: true})
    .then(pokie => {
      res.redirect(`/pokies/${pokie.name}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
