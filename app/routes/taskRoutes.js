const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

// Створення папки
router.post('/create', taskController.createTask);

// Отримання всіх папок
router.get('/get', taskController.getTasks);

module.exports = router;