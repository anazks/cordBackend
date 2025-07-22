const express = require('express');
const router = express.Router();
const { createBranch,getAllBranches,branchDelete,addStudent,deleteStudent,viewAllStudents } = require('../Controller/Controller')
const verifyToken = require('../../Middleware/verifyToken');
const { verify } = require('jsonwebtoken');


router.get('/test', (req, res) => {
    res.json({ 
        message: 'Auth router is working!',
        timestamp: new Date().toISOString(),
        route: '/test'
    });
});

router.route('/branch').post(verifyToken,createBranch)
router.route('/branch/:id').get(verifyToken,getAllBranches)
router.route('/branch/:id').delete(verifyToken,branchDelete)
router.route('/student').post(verifyToken,addStudent)
router.route('/student/:id').get(verifyToken,viewAllStudents)
router.route('/student/:id').delete(verifyToken,deleteStudent)

module.exports = router;