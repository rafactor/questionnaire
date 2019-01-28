
var express = require('express');
var router = express.Router();
var questionnaire = require("../controllers/questionnaire-controller");


router.get('/questionnaires', function(req, res) {
    // res.send('get questionnaires!');  
    console.log('api get quest')
    // console.log(Questionnaire)
    console.log(questionnaire.getAll())
  });
  
router.post('/questionnaires', function(req, res) {
    res.send('post questionnaiires'); 
  });

  router.put('/questionnaires', function(req, res) {
    res.send('post questionnaiires'); 
  });

  router.delete('/questionnaires', function(req, res) {
    res.send('post questionnaiires'); 
  });

module.exports = router;