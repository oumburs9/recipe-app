const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Use GET for retrieving tasks with optional filter, page, and limit parameters
router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.createTask);

module.exports = router;
