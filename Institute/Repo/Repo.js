const express = require('express')
const Course = require('../Models/Course');
const { findByIdAndDelete } = require('../Models/Institute');
const Student = require('../Models/Student')
const Batch = require('../Models/Batch')

module.exports.createCourseFunction = async (data) => {
    try {
        let course = await Course.create(data);
        return course
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAllCourseFunction = async (instituteId) => {
    try {
        let course = await Course.find({instituteId:instituteId})
        return course
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteCourseFunction = async (courseId) => {
    try {
        let Course = await Course.findByIdAndDelete(CourseId)
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

module.exports.viewAllStudentsFunction = async (courseId) => {
    try {
        let students = await Student.find({courseId:courseId})
        return students;
    } catch (error) {
        console.log(error)
    }
}

module.exports.createBatchFunction = async (data) => {
    try {
        batch = await Batch.create(data);
        return batch
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAllBatchesFunction = async (courseId) => {
    try {
        console.log(courseId)
        batch = await Batch.find({courseId:courseId})
        return batch
    } catch (error) {
        console.error(error)
    }
}