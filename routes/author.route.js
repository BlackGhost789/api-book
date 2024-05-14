const express = require('express');
const routerAuthor = express.Router();

const {createAuthor, findOneAuthor, findAllAuthors, updateAuthor, deleteAuthor} = require('../controllers/author.controller');

routerAuthor.post('/', createAuthor);
routerAuthor.get('/:id', findOneAuthor);
routerAuthor.get('/', findAllAuthors);
routerAuthor.put('/:id', updateAuthor );
routerAuthor.delete('/:id', deleteAuthor);


module.exports = routerAuthor;