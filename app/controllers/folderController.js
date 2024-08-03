const folder = require('../models/folderModel.js');


exports.createFolder = async (req, res) => {
    try {
        const newFolder = new folder(req.body);
        await newFolder.save();
        res.status(201).json(newFolder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getFolders = async (req, res) => {
    try {
        const folders = await folder.find();
        res.json(folders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};