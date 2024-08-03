const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController.js');

// Створення папки
router.post('/create', folderController.createFolder);

// Отримання всіх папок
router.get('/get', folderController.getFolders);

module.exports = router;