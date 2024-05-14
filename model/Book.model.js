const sequelize = require('./index');
const {Model , DataTypes } = require('sequelize');

class Book extends Model{}

Book.init({
    name:{
        type: DataTypes.STRING,
    },
    dateCreation:{
        type: DataTypes.STRING,
    },
    author:{
        type: DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName : 'book'
})

module.exports = Book