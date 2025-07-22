const express = require('express');
const router = express.Router();

console.log('=== LOADING AUTH ROUTER ===');

let institutionRegister, institutionLogin;

try {
    const controllers = require('../Controller/authController');
    console.log('✅ Controllers imported:', Object.keys(controllers));
    
    institutionRegister = controllers.institutionRegister;
    institutionLogin = controllers.institutionLogin;
    
    if (!institutionLogin) {
        console.error('❌ institutionLogin function not found in controller');
    }
    if (!institutionRegister) {
        console.error('❌ institutionRegister function not found in controller');
    }
    
} catch (error) {
    console.error('❌ Error importing controllers:', error.message);
}

const verifyToken = require('../../Middleware/verifyToken');

// Register routes
console.log('=== REGISTERING ROUTES ===');
router.route('/registration').post(institutionRegister);
router.route('/login').post(institutionLogin);
console.log('✅ Routes registered: /registration, /login');

module.exports = router;