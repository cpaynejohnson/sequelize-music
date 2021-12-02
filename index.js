//models go here

const {sequelize, DataTypes, Model} = require('./db')

//create model for musicians in our database
class Musician extends Model {
    //add query methods here
}

//create attributes for model using init method
Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
class Band extends Model {
    //add query methods here
}

//create attributes for model using init method
Band.init({
    name: DataTypes.STRING,
    no_of_members: DataTypes.INTEGER,
    genre: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Musician, Band}