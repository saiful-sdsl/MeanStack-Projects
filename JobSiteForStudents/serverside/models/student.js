const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

module.exports = mongoose.model('Student', studentSchema, 'student');