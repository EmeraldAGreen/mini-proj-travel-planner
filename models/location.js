const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'traveller',
            key: 'id',
        },
    },
        
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;
