module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define('question', {
        question: DataTypes.STRING,
        type: DataTypes.STRING,
        // options: DataTypes.ARRAY(Sequelize.TEXT),
        required: DataTypes.BOOLEAN,
        
    });
    return Question;

}
