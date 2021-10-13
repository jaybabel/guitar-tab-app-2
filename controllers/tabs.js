const Tab = require('../models').Tab
const Tuning = require('../models').Tuning
const Artist = require('../models').Artist
const { Op } = require("sequelize")

const index = (req, res) => {
    Artist.findAll().then(artists => {
        Tuning.findAll().then(tunings => {
            Tab.findAll().then(tabs => {
                res.render('index.ejs', {
                    artists: artists,
                    tunings: tunings,
                    tabs: tabs
                })
            })
        })
    })
}

const show = (req, res) => {
    Tab.findByPk(req.params.index, {
        include: [
            Tuning,
            Artist
        ]
    })
        .then(tab => {
            res.render('showTab.ejs', {
                tab: tab
            });
        });
}

const renderDelete = (req, res) => {
    Tab.findByPk(req.params.index)
        .then(foundTab => {
            res.render('deleteTab.ejs', {
                tab: foundTab
            })
        })
}

const deleteTab = (req, res) => {
    Tab.destroy({ where: { id: req.params.index } })
        .then(() => {
            res.redirect('/')
        })
}

const renderEdit = (req, res) => {
    Tab.findByPk(req.params.index, {
    include: [
        Tuning,
        Artist
    ]
    })
    .then(foundTab => {
        Artist.findAll().then(artists => {
            Tuning.findAll().then(tunings => {
            res.render('editTab.ejs', {
                tab: foundTab,
                artists: artists,
                tunings: tunings
            });
            });
        });
    })
}

const editTab = (req, res) => {
    Tab.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    })
        .then(() => {
            res.redirect('/')
        })
}

const renderNew = (req, res) => {
    Artist.findAll().then(artists => {
        Tuning.findAll().then(tunings => {
            res.render('newTab.ejs', {
                artists: artists,
                tunings: tunings
            })
        })
    })
}

const postTab = (req, res) => {
    Tab.create(req.body).then((newTab) => {
        res.redirect('/');
    })
}

//This is used to search
const search = (req, res) => {
 //   console.log(" ============ button pressed ============")
    console.log(req.body)
    Artist.findAll().then(artists => {
        Tuning.findAll().then(tunings => {
            Tab.findAll({
                where: 
                { tabTitle: req.body.tabTitle },     
            }).then((tabs) => {
 //     console.log(" ================== found Tab =======", tabs);
        res.render("index.ejs", {
            tabs: tabs,
            artists: artists,
            tunings: tunings
        });
        });
          });
    });
}

module.exports = {
    index,
    renderNew,
    postTab,
    renderDelete,
    deleteTab,
    renderEdit,
    editTab,
    show,
    search
}