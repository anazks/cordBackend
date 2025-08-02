const express = require('express');
const router = express.Router();
const { createCourse,getAllCourse,courseDelete,addStudent,deleteStudent,viewAllStudents,createBatch,getAllBatches,makePayment,fetchProfile,updateStudent,updateBatch, viewPayments } = require('../Controller/Controller')
const verifyToken = require('../../Middleware/verifyToken');
const { verify } = require('jsonwebtoken');


router.get('/test', (req, res) => {
    res.json({ 
        message: 'Auth router is working!',
        timestamp: new Date().toISOString(),
        route: '/test'
    });
});

router.route('/profile/:id').get(verifyToken,fetchProfile)
router.route('/course').post(verifyToken,createCourse)
router.route('/course/:id').get(verifyToken,getAllCourse)
router.route('/course/:id').delete(verifyToken,courseDelete)
router.route('/student').post(verifyToken,addStudent)
router.route('/student/:id').get(verifyToken,viewAllStudents)
router.route('/student/:id').delete(verifyToken,deleteStudent)
router.route('/batch').post(verifyToken,createBatch)
router.route('/batch/:id').get(verifyToken,getAllBatches)
router.route('/payment').post(verifyToken,makePayment)
router.route('/student/:id').put(verifyToken,updateStudent)
router.route('/batch/:id').put(verifyToken,updateBatch)
router.route('/payments/:id').get(verifyToken,viewPayments)


module.exports = router;