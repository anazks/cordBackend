const express = require('express');
const router =  express.Router();
const { institutionRegister,institutionLogin } = require('../Controller/authController')

router.route('/registration').post(institutionRegister)
router.route('/login').post(institutionLogin);

module.exports  = router;

