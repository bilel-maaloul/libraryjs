const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sad:52520935@book.tpv5a.mongodb.net/sample_mflix?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const bookRoutes = require("./routes/Books.js");

app.use("/api/books", bookRoutes);

module.exports = app;
