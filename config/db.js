const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://iamabdulquddus:NearibemariNotesdb@notes.ql4slho.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('db connected')).catch((err) => { console.log(err)});

module.exports = connection;