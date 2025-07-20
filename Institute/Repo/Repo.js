const express = require('express')
const Branch = require('../Models/Branch')

module.exports.createBranchFunction = async (data) => {
    try {
        let branch = await Branch.create(data);
        return branch
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAllBranchesFunction = async () => {
    try {
        let branches = await Branch.find({})
        return branches
    } catch (error) {
        console.log(error)
    }
}