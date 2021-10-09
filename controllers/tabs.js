const Tab = require('../models').Tab

const index = (req, res) => {
    Tab.findAll().then(tabs => {
        res.render('index.ejs', {
            tabs: tabs
        })
    })
  }

const renderShowTab = (req, res) => {
    res.render('showTab.ejs')
}

module.exports = {
    index,
    renderShowTab
}