const express = require("express");
const logger = require("morgan");
var cors = require("cors");

const index = require("./routes/index");
const booksRouter = require("./routes/books.js");
const authors = require("./routes/authors.js");

const app = express();
app.use(logger("dev"));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: process.env.ALLOWED_ORIGIN
    })
  );
} else {
  app.use(cors());
}


app.use("/", index);
booksRouter(app);
app.use("/authors", authors);

module.exports = app;
