const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOver = require('method-override')
const shuffle = require('shuffle-array')
const flatstas = require('./controller/flatstas')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()

app.set('port', process.env.PORT || 6009)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json()) // handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
app.use('/flatstas', flatstas)
app.use(methodOver('_method'))

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.listen(app.get('port'), () => {
  console.log('Aww..yeah!')
})

app.get('/', (req, res) => {
  res.render('app-welcome')
})
