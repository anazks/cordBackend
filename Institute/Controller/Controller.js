const express = require('express')
const { createBranchFunction,getAllBranchesFunction,deleteBranchFunction,addStudentFunction,deleteStudentFunction,viewAllStudentsFunction } = require('../Repo/Repo')

const createBranch = async (req,res) => {
    try {
        const data = req.body;
        const branch = await createBranchFunction(data)
        res.json({
            success:true,
            message:"branch is successfully created",
            branch
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllBranches = async (req,res) => {
    try {
        const instituteId = req.params.id
        const branches = await getAllBranchesFunction(instituteId)
        res.status(200).json({
            success:true,
            message:"successfully fetched all branches",
            branches
        })
    } catch (error) {
        console.error('error in fetching branches',error)
        res.status(500).json({
            success:false,
            message:"cant fetch the branches",
        })
    }
}

const branchDelete = async (req,res) => {
    try {
        const branchId = req.params.id;
        const branch = await deleteBranchFunction(branchId)
        res.status(200).json({
            succuss:true,
            message:"successfully deleted the branch",
        })
    } catch (error) {
        console.error("error in  deleting branch",error)
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
        const branchId = req.params.id
        const students = await viewAllStudentsFunction(branchId)
        res.status(200).json({
            success:true,
            message:"successfully fetched all students",
            students
        })
    } catch (error) {
        console.error('error in fetching branches',error)
        res.status(500).json({
            success:false,
            message:"cant fetch the branches",
        })
    }
}




module.exports = { createBranch,getAllBranches,branchDelete,addStudent,deleteStudent,viewAllStudents }