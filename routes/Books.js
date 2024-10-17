const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController.js");

router.get("/", bookController.fetchBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
