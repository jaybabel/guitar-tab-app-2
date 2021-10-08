const Tab = require('../models').Tab

const index = (req, res) => {
    res.render('index.ejs')
  }

const renderShowTab = (req, res) => {
    res.render('showTab.ejs')
}

module.exports = {
    index,
    renderShowTab
}