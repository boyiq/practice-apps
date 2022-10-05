const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/glossary');

const glossarySchema = new Schema({
  _id: Number,
  word: {type: String, unique: true},
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
module.exports.glossaries = Glossary;