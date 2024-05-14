const Book = require('../model/Book.model');


const createBook = async (req, res) => {
   const book = await Book.create(req.body);
   res.send(book)
}



const findAllBooks = async ( req, res) => {
    const books = await Book.findAll();
    res.send(books);
}
const findOneBook = async ( req, res) => {
    const bookId = req.params.id;
    const book = await Book.findOne({where : {id : bookId}});
    res.send(book);
}

const updateBook = async ( req, res) => {
    const bookId = req.params.id
    const book = await Book.update(req.body , {where : {id : bookId}});
    res.send(`book ${bookId} updated`);
}

const deleteBook = async ( req, res) => {
    const bookId = req.params.id
    const book = await Book.destroy({where : {id : bookId}});
    res.send(`book ${bookId} deleted`);
}


const deleteAllBooks = ( req, res) => {
    
}




module.exports = {createBook, findAllBooks, findOneBook, updateBook, deleteBook}