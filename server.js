const express = require("express");
const app = express();
const bookRoutes = require("./routes/books");
const cors = require("cors");

app.use(express.json());
// cors
app.use(cors());

//routes
app.use("/books", bookRoutes);

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Book Service at  port ${PORT}`);
});
