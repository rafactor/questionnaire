module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("person", {
      firstName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
      },
      middleName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }

    });
    return Person;
  };