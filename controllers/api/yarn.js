const Yarn = require('../../models/yarn')

module.exports = {
    new: newYarn,
    create,
}

function newYarn(req, res) {
    res.render('/new-yarn', {title: 'Add New Yarn'});
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const yarn = new Yarn(req.body);
        await yarn.save();
        res.json(yarn);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}