const Tab = require('../models').Tab
const Tuning = require('../models').Tuning

const index = (req, res) => {
    Tab.findAll().then(tabs => {
        res.render('index.ejs', {
            tabs: tabs
        })
    })
}

const show = (req, res) => {
    Tab.findByPk(req.params.index, {
        include: [Tuning]
    })
        .then(tab => {
            res.render('showTab.ejs', {
                tab: tab
            });
        });
}

const deleteTab = (req, res) => {
    Tab.destroy({ where: { id: req.params.index } })
        .then(() => {
            res.redirect('/')
        })
}

const renderEdit = (req, res) => {
    Tab.findByPk(req.params.index)
        .then(foundTab => {
            res.render('editTab.ejs', {
                tab: foundTab
            });
        });
}

const editTab = (req, res) => {
    Tab.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }
    )
        .then(tab => {
            res.redirect('/')
        })
}

const renderNew = (req, res) => {
    res.render('new.ejs')
}

const postTab = (req, res) => {
    Tab.create(req.body).then((newTab) => {
        res.redirect('/');
    })
}

module.exports = {
    index,
    renderNew,
    postTab,
    deleteTab,
    renderEdit,
    editTab,
    show
}