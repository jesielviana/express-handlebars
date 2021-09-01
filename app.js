const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Rotas
app.get('/', function (req, res) {
  res.render('home')
})

app.get('/produtos', function (req, res) {
  res.render('produtos')
})

app.get('/usuarios', function (req, res) {
  res.render('usuarios', { layout: 'admin' })
})

app.listen(3000)
