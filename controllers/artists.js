const Artist = require('../models').Artist
const Tab = require('../models').Tab

const newArtist = (req, res) => {
    Artist.create(req.body).then((newArtist) => {
        res.redirect('/tabs');
    })
}
// res.redirect('/artists');
//res.redirect(`/edit/${newArtist.id}`); 

module.exports = {
    newArtist
}