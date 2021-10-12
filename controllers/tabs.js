const Tab = require('../models').Tab
const Tuning = require('../models').Tuning
const Artist = require('../models').Artist
const Op = require("sequelize");

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
const searchTitle = (req, res) => {
    console.log(req.body)
    Tab.findAll({
        where:
        {
            name: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: Tabs,
                    attributes: ["tabTitle", "id"],
                },
            ],        
    }).then((foundTabs) => {
        console.log("found Tab", foundTabs[0].tabTitle);
        res.render("tabs/index.ejs", {
            tab: foundTabs,
          });
    });
};

const searchArtist = (req, res) => {
    console.log(req.body)
    Tab.findAll({
        where:
        {
            name: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: Artist,
                    attributes: ["artistName", "id"],
                },
            ],        
    }).then((foundTabs) => {
        console.log("found Tab", foundTabs[0].tabTitle);
        res.render("tabs/index.ejs", {
            tab: foundTabs,
          });
    });
};

module.exports = {
    index,
    renderNew,
    postTab,
    renderDelete,
    deleteTab,
    renderEdit,
    editTab,
    show,
    searchTitle,
    searchArtist
}