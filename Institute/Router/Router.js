const express = require('express');
const router = express.Router();
const { createBranch,getAllBranches } = require('../Controller/Controller')
const verifyToken = require('../../Middleware/verifyToken')

router.route('/branch').post(verifyToken,createBranch)
router.route('/branches').get(verifyToken,getAllBranches)

module.exports = router;