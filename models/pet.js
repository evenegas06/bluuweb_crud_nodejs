const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pet_schema = new Schema({
    name: String,
    description: String
});

// Create the model
const Pet = mongoose.model('Pet', pet_schema);

module.exports = Pet;