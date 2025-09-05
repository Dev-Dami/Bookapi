const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/books.json");

let books = [];

try {
  books = JSON.parse(fs.readFileSync(dataPath));
} catch {
  books = [];
}

const saveData = () => {
  fs.writeFileSync(dataPath, JSON.stringify(books, null, 2));
};

class Book {
  static getAll() {
    return books;
  }

  static getById(id) {
    return books.find((b) => b.id === id);
  }

  static create({ title, author }) {
    const newBook = { id: uuidv4(), title, author };
    books.push(newBook);
    saveData();
    return newBook;
  }

  static update(id, { title, author }) {
    const book = books.find((b) => b.id === id);
    if (!book) return null;
    book.title = title || book.title;
    book.author = author || book.author;
    saveData();
    return book;
  }

  static delete(id) {
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) return false;
    books.splice(index, 1);
    saveData();
    return true;
  }
}

module.exports = Book;
