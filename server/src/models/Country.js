const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    imageFlag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { timestamps: false });
};