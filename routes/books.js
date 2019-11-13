const express = require('express');
const router = express.Router();
const Author = require('../models/author')
const Book = require('../models/book')

router.get('/', async (req, res) => {
  res.send('All Books')
});

router.get('/new', async (req, res) => {
  try {
    const authors = await Author.find({});
    const book = new Book();
    res.render('books/new', {
      authors: authors,
      book, book,
    })
  } catch (error) {
    console.log(error)
    res.redirect('/books')
  }
});

router.post('/', async (req, res) => {
  res.send('Create Book')
})

module.exports = router;