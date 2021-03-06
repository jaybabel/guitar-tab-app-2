const express = require('express')  // to load express modules
const fileUpload = require('express-fileupload')
const app = express()  // make express methods available
const routes = require('./routes')
const methodOverride = require('method-override')

//Middleware
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true}))

app.use(fileUpload({
    createParentPath: true
  })
)

app.get('/', (req, res) => {
    res.redirect('/tabs')
  })

app.use('/tabs', routes.tabs)
app.use('/users', routes.users)
app.use('/artists', routes.artists)

// listen at port 3003
app.listen(process.env.PORT || 3003, () => {
    console.log('I am listening')
})