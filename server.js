const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/books");
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/books", bookRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Book Service at port ${PORT}`);
});
