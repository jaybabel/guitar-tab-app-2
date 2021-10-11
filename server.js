const express = require('express')  // to load express modules
const app = express()  // make express methods available
const routes = require('./routes')
const methodOverride = require('method-override')

//Middleware
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs')
  })

app.use('/tab', routes.tabs)
app.use('/users', routes.users)

// listen at port 3003
app.listen(3003, () => {
    console.log('I am listening')
})