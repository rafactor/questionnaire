
var express = require('express');
var router = express.Router();

router.get('/questionnaires', function(req, res) {
    res.send('get questionnaires!');  
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