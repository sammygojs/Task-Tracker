const express = require('express');
const {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
  } = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);           // <-- changed
router.get('/', getTasks);              // <-- changed
router.get('/:id', getTask);            // <-- changed
router.put('/:id', updateTask);         // <-- changed
router.delete('/:id', deleteTask);      // <-- changed

module.exports = router;
