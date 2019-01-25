module.exports = function(sequelize, DataTypes) {
    var Questionnaire = sequelize.define("questionnaire", {
      name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }

    });
    return Questionnaire;
  };