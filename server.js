// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
// Mount Middleware (app.use)



// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})


// Mount routes

app.get('/', function(req, res) {
    res.send('<h1>hello, friend</h1>')
  })

  // You do you

  app.get('/', function(req, res) {
    res.redirect('/home')
  })

  // Configure the app (app.set)
app.set('view engine', 'ejs')



// import the todo data
import { colors } from './data/colors-data.js'
// we could also do:
// import * as todoData from './data/color-data.js'
// but not both! (well, you can, but please don't)


//another route for displaying the list of colors
app.get('/colors', function(req, res) {
  res.render('colors/index', {
    colors: colors
  })
})