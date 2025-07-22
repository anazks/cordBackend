const express = require('express')
const Branch = require('../Models/Branch');
const { findByIdAndDelete } = require('../Models/Institute');
const Student = require('../Models/Student')

module.exports.createBranchFunction = async (data) => {
    try {
        let branch = await Branch.create(data);
        return branch
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAllBranchesFunction = async (instituteId) => {
    try {
        let branches = await Branch.find({instituteId:instituteId})
        return branches
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteBranchFunction = async (branchId) => {
    try {
        let branch = await Branch.findByIdAndDelete(branchId)
    } catch (error) {
        console.log(error)
    }
}

module.exports.addStudentFunction = async (data) => {
    try {
        let student = await Student.create(data);
        return student
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteStudentFunction = async (studentId) => {
    try {
        let student = await Student.findByIdAndDelete(studentId)
    } catch (error) {
        console.log(error)
    }
}

module.exports.viewAllStudentsFunction = async (branchId) => {
    try {
        let students = await Student.find({branchId:branchId})
        return students;
    } catch (error) {
        console.log(error)
    }
}

