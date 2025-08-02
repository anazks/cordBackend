const express = require('express')
const Course = require('../Models/Course');
const { findByIdAndDelete } = require('../Models/Institute');
const Student = require('../Models/Student')
const Batch = require('../Models/Batch')
const Institute = require('../Models/Institute')
const Payments = require('../Models/Payments')

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



module.exports.findMonthlyFees = async (studentId) => {
    try {
        // Step 1: Find student
        const student = await Student.findById(studentId);
        if (!student) {
            throw new Error('Student not found');
        }

        // Step 2: Get courseId from student
        const courseId = student.courseId;

        // Step 3: Find course
        const course = await Course.findById(courseId);
        if (!course) {
            throw new Error('Course not found');
        }

        // Step 4: Return monthlyFees
        return course.monthlyFees;

    } catch (error) {
        console.error("findMonthlyFees error:", error);
        throw error; // rethrow if needed
    }
};

module.exports.fetchProfileFunction = async (instituteId) => {
    try {
        const profile = await Institute.findById(instituteId);
        return profile
    } catch (error) {
        console.error(error)
    }
}

module.exports.updateStudentFunction = async (studentId,studentData) => {
    try {
        const student = await Student.findByIdAndUpdate(studentId, {$set:studentData},{new:true})
        return student
    } catch (error) {
        console.error(error)
    } 
}

module.exports.updateBatchFunction = async (BatchId,batchData) => {
    try {
        const batch = await Batch.findByIdAndUpdate(BatchId,{$set:batchData},{new:true})
        return batch
    } catch (error) {
        console.error(error)
    }   
}

module.exports.viewPaymentsFunction = async (instituteId) => {
    try {
        const payments = await Payments.find({recevingInstitutionId:instituteId})
        return payments
    } catch (error) {
        console.error(error)
    }
}
