// Requiring our models
var db = require("../models");

module.exports = class Questionnaire {
    constructor(){

    }

    //Getter
    getAll(){
        console.log('ques get')
            // db.Questionnaire.findAll({}).then(function(response) {
            //   // We have access to the todos as an argument inside of the callback function
            //   res.json(response);
            // });
        return 'response';
    }

}