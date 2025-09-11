const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  published_year: {
    type: Number,
  },
  genre: {
    type: String,
  },
  in_stock: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
