const User = require('../models').User;
const Tab = require('../models').Tab;

const index = (req, res) => {
    res.render('users/index.ejs', {
        users: User
    });
};

const deleteUser = (req, res) => {
    User.destroy({ where: { id: req.params.index } })
        .then(() => {
            res.redirect('/users');
        })
}

const renderNew = (req, res) => {
    res.render('users/signup.ejs');
}

const addNew = (req, res) => {
    User.create(req.body).then((newUser) => {
        res.redirect(`/users/profile/${newUser.id}`); 
    })
}

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [{
            model: Tab,
            attributes: ['id','name']
        }] 
    })
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user: user
        })
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then((user) => {
        User.findByPk(req.params.index)
    })
    res.redirect('/users');
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        },
    }).then((user) => {
        user
            ? res.redirect(`/users/profile/${user.id}`)
            : res.redirect('/users/login');
    });
}

module.exports = {
    index,
    renderNew,
    addNew,
    renderLogin,
    login,
    editProfile,
    renderProfile,
    deleteUser
}
