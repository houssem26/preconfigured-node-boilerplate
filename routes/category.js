const ctrl = require('../controllers/category')
var express = require('express');
var router = express.Router();
const categoryValidation = require('../validations/category')


/* GET home page. */
router.get('/', function(req, res, next) {
  return ctrl.readAll(req, res)
});

router.post('/',categoryValidation.validatePost, function(req, res, next) {
  return ctrl.createOne(req, res)
});


module.exports = router;
