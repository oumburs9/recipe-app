const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;
