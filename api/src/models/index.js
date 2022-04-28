const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    launchDate: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    }
  }, {
    timestamps: false
  });

  sequelize.define("genre", {
    name: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false
    })
};
