const sequelize = require('./index');
const {Model , DataTypes } = require('sequelize');

class Author extends Model{}

Author.init({
    username:{
        type: DataTypes.STRING,
    },
    payee:{
        type: DataTypes.STRING,
    },
    birthYear:{
        type: DataTypes.INTEGER,
    }
},{
    sequelize,
    modelName : 'author'
})

module.exports = Author