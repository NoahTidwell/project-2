
// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Venues extends Model {}

// set up fields and rules for Product model
Venues.init(
  {
    //define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
          len: [1]
        } 
    },
    ur:{
        type: DataTypes.STRING(50),
        validate:{
            isUrl: true,
          } 
     },
    street:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            len: [3]
          } 
    },
    city:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            len: [1]
        }
    },
    state:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            len: [2]
         }
    },
    zipcode:{
        type: DataTypes.INTEGER(5),
        allowNull: false,
        validate: {
            isNumeric: true
          }
    },
    min: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },  
    max: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    venuetype_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'venuetype',
        key: 'id'
       }
    },
    third_party_vendors:{
      type: DataTypes.BOOLEAN,
    },
    user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
     }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'venues',
  }
);

module.exports = Venues;