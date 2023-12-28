const mongoose = require('mongoose');

// Define the schema for the Painting collection
const paintingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create a model based on the schema
const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
