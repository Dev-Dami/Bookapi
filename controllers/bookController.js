const Book = require("../models/book");

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(Book.getAll());
};

// Get book ID
exports.getBookById = (req, res) => {
  const book = Book.getById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// Create a book func
exports.createBook = (req, res) => {
  const newBook = Book.create(req.body);
  res.status(201).json(newBook);
};

// Update func
exports.updateBook = (req, res) => {
  const updatedBook = Book.update(req.params.id, req.body);
  if (!updatedBook) return res.status(404).json({ message: "Book not found" });
  res.json(updatedBook);
};

// Delete func
exports.deleteBook = (req, res) => {
  const deleted = Book.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted successfully" });
};
