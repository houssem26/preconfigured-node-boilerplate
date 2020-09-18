const ctrl = require('../controllers/workflow')
var express = require('express');
var router = express.Router();
const workFlowValidation = require('../validations/workflow')


/* GET home page. */
router.get('/', function(req, res, next) {
  return ctrl.get(req, res)
});

router.post('/',workFlowValidation.validatePost, function(req, res, next) {
  return ctrl.createOne(req, res)
});

router.get('/filter',workFlowValidation.validateFilter, function(req, res, next) {
  return ctrl.filter(req, res)
});



module.exports = router;
