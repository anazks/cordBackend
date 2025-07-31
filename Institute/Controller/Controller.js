const express = require('express')
const { createCourseFunction,getAllCourseFunction,deleteCourseFunction,addStudentFunction,deleteStudentFunction,viewAllStudentsFunction,createBatchFunction,getAllBatchesFunction } = require('../Repo/Repo')
const { makePaymentFuncion } = require('../UseCause/UseCause')

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



module.exports = { createCourse,getAllCourse,courseDelete,addStudent,deleteStudent,viewAllStudents,createBatch,getAllBatches,makePayment }