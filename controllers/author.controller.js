const Author = require("../model/Author.model");

const createAuthor = async (req, res) => {
  const author = await Author.create(req.body);
  res.send(author);
};

const findAllAuthors = async (req, res) => {
    const authors = await Author.findAll();

    res.send(authors);
};


const findOneAuthor = async (req, res) => {
  const authorId = req.params.id;
  const author = await Author.findOne({ where: { id: authorId } });

  if (author) {
    console.log("User found:");
    res.send(author);
  } else {
    console.log("User not found");
  }
};

const updateAuthor = async (req, res) => {

    const authorId = req.params.id;
    const author = await Author.update(req.body,  { where: { id: authorId } });
    res.send('updated');
};

const deleteAuthor = async (req, res) => {
    const authorId = req.params.id;
    const author = await Author.destroy(({ where: { id: authorId } }));
    res.send('deleted');
};

const deleteAllAuthors = (req, res) => {};

module.exports = { createAuthor , findOneAuthor, findAllAuthors, updateAuthor, deleteAuthor};
