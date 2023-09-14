const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficult: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          min: 1,
          max: 24,
      },
    },
    season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
        defaultValue: "Verano",
    },
  }, { timestamps: false });
};