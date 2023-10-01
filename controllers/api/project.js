const Project = require('../../models/project')

module.exports = {
    index,
    new: newProject,
    create,
    show,
}

function index(req, res) {
    Project.find({ user: req.user._id})
            .exec(function(err, projects) {
                res.render('/', { title: 'Projects', projects })
    });
}

function newProject(req, res) {
    const defaultProject = new Project();
    const startDt = defaultProject.startDate;
    let defaultStartDate = `${startDt.getFullYear()}-${(startDt.getMonth() + 1).toString().padStart(2, '0')}`;
    defaultStartDate += `-${startDt.getDate().toString().padStart(2, '0')}T${startDt.toTimeString().slice(0, 5)}`;
    res.render('/new-project', {defaultStartDate, title: 'New Project'});
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const project = new Project(req.body);
        await project.save();
        res.json(project);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function show(req, res) {
    console.log(req.params)
    const project = await Project.findOne({ _id: req.params.projectId})
    console.log(project);
    res.json(project);

}