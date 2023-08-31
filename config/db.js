const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/newNotes').then(() => console.log('db connected')).catch((err) => { console.log(err)}); 

module.exports = connection; 