const router = require("express").Router();
const { getTasks, postTask, deleteTask, getSingleTask,patchTask } = require("../controller/task");

router.route('/').get(getTasks).post(postTask)
router.route('/:id').get(getSingleTask).delete(deleteTask).patch(patchTask)


module.exports = router