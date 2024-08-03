const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const folderRoutes = require('./routes/folderRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MYToDo', {})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.use('/api/folders', folderRoutes);
app.use('/api/tasks', taskRoutes);

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));