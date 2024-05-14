const express = require('express');
const routerBook = express.Router();

const {createBook, deleteBook, findAllBooks, findOneBook, updateBook} = require('../controllers/book.controller');

routerBook.post('/', createBook);
routerBook.get('/:id', findOneBook);
routerBook.get('/', findAllBooks);
routerBook.put('/:id', updateBook);
routerBook.delete('/:id', deleteBook);


module.exports = routerBook;