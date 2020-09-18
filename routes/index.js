const express = require('express');
const router = express.Router();
const workflowRouter = require('./workflow');
const categoryRouter = require('./category');

router.use('/workflow', workflowRouter);
router.use('/category', categoryRouter);

module.exports = router;
