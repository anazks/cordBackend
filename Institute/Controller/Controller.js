const express = require('express')
const { createCourseFunction,getAllCourseFunction,deleteCourseFunction,addStudentFunction,deleteStudentFunction,viewAllStudentsFunction,createBatchFunction,getAllBatchesFunction,fetchProfileFunction,updateStudentFunction,updateBatchFunction,viewPaymentsFunction } = require('../Repo/Repo')
const { makePaymentFuncion } = require('../UseCause/UseCause');
const { EsimProfilePage } = require('twilio/lib/rest/supersim/v1/esimProfile');

const createCourse = async (req,res) => {
    try {
        const data = req.body;
        const course = await createCourseFunction(data)
        res.json({
            success:true,
            message:"course is successfully created",
            course
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllCourse = async (req,res) => {
    try {
        const instituteId = req.params.id
        const course= await getAllCourseFunction(instituteId)
        res.status(200).json({
            success:true,
            message:"successfully fetched all coursees",
            course
        })
    } catch (error) {
        console.error('error in fetching coursees',error)
        res.status(500).json({
            success:false,
            message:"cant fetch the coursees",
        })
    }
}

const courseDelete = async (req,res) => {
    try {
        const courseId = req.params.id;
        const course = await deleteCourseFunction(courseId)
        res.status(200).json({
            succuss:true,
            message:"successfully deleted the course",
        })
    } catch (error) {
        console.error("error in  deleting course",error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

const addStudent = async (req,res) => {
    try {
        const data = req.body
        const student = await addStudentFunction(data)
        res.status(200).json({
            succuss:true,
            message:"successfully added student",
            student
        })
    } catch (error) {
        console.error("error in adding student",error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

const deleteStudent = async (req,res) => {
    try {
        const studentId = req.params.id
        const student = await deleteStudentFunction(studentId)
        res.status(200).json({
            succuss:true,
            message:"successfully deleted student",
            student
        })
    } catch (error) {
        console.error("error in deleting student",error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

const viewAllStudents = async (req,res) => {
    try {
        const courseId = req.params.id
        const students = await viewAllStudentsFunction(courseId)
        res.status(200).json({
            success:true,
            message:"successfully fetched all students",
            students
        })
    } catch (error) {
        console.error('error in fetching coursees',error)
        res.status(500).json({
            success:false,
            message:"cant fetch the coursees",
        })
    }
}

const createBatch = async (req,res) => { 
    try {
        const data = req.body
        const batch = await createBatchFunction(data)
        res.status(200).json({
            success:true,
            message:"successfully created batch",
            batch
        })
    } catch (error) {
        console.error('error in creating batch')
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

const getAllBatches = async (req,res) => {
    try {
        const courseId = req.params.id
        console.log('requet arrived')
        const batches = await getAllBatchesFunction(courseId)
        res.status(200).json({
            success:true,
            message:"successfully fetched the batches",
            batches
        })
    } catch (error) {
       console.error(error,"error in fetching batches") 
       res.status(500).json({
        success:false,
        message:"internal server error"
       })
    }
}


const makePayment = async (req,res) => {
    try {
        const data = req.body 
        const payment = await makePaymentFuncion(data)
          res.status(200).json({
            success:true,
            message:"successfully done payment",
            payment,
        })
    } catch (error) {
        console.error(error,"error in payment")
        res.status(500).json({
        success:false,
        message:"internal server error"
       })
    }
}

const fetchProfile = async (req,res) => {
    try {
        const instituteId = req.params.id 
        const profile = await fetchProfileFunction(instituteId)
        if(profile == null){
            res.status(500).json({
                success:false,
                message:"internal server error",
            })
        }else{
            res.status(200).json({
            success:true,
            message:"successfully fetched profile",
            profile
        })
        }
    } catch (error) {
        console.error(error)
    }
}

const updateStudent = async (req,res) => {
    try {
        const studentId = req.params.id
        const studentData = req.body
        const student = await updateStudentFunction(studentId,studentData)
        if(student == null){
            res.status(500).json({
                success:true,
                message:"internal server error",
                student

            })
        }else{
            res.status(200).json({
                success:true,
                message:"successfully udated student",
                student
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const updateBatch = async (req,res) => {
    try {
        const batchId = req.params.id
        const batchData = req.body
        const batch = await updateBatchFunction(batchId,batchData)
        if(!batch){
            res.status(500).json({
                success:true,
                message:"internal server error"
            })
        }else{
            res.status(200).json({
                success:true,
                message:"successfully updated batch",
                batch
            })
        }
    } catch (error) {
        
    }
}

const viewPayments = async (req,res) => {
    try {
        const instituteId = req.params.id
        const payments = await viewPaymentsFunction(instituteId)
        if(!payments){
            res.status(500).json({
                success:true,
                message:"internal server error"
            })
        }else{
            res.status(200).json({
                success:true,
                message:"successfully fetch all payments of insitute",
                payments
            })
        }
    } catch (error) {
        console.error(error,"error in viewPayments")
    }
}

module.exports = { createCourse,getAllCourse,courseDelete,addStudent,deleteStudent,viewAllStudents,createBatch,getAllBatches,makePayment,fetchProfile,updateStudent,updateBatch,viewPayments }