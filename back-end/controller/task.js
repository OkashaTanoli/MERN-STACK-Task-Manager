const Task = require('../model/task')
const TryCatch = require('../middleware/trycatch')

const getTasks = TryCatch(async (req, res, next) => {
    const task = await Task.find()
    res.status(200).json(task)
})

const postTask = TryCatch(async (req, res, next) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
})

const getSingleTask = TryCatch(async (req, res, next) => {
    const task = await Task.findOne({ _id: req.params.id })
    if (!task) {
        return res.status(404).json({ msg: `no data with id ${req.params.id}` })
    }
    res.status(200).json(task)

})

const deleteTask = TryCatch(async (req, res, next) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    if (!task) {
        return res.status(404).json({ msg: `no data with id ${req.params.id}` })
    }
    res.status(200).json(task)
})

const patchTask = TryCatch(async (req, res, next) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body,{
        new:true
    })
    if (!task) {
        return res.status(404).json({ msg: `no data with id ${req.params.id}` })
    }
    res.status(200).json(task)

})

module.exports = {
    getTasks,
    postTask,
    deleteTask,
    getSingleTask,
    patchTask
}