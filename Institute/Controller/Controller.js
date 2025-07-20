const express = require('express')
const { createBranchFunction,getAllBranchesFunction } = require('../Repo/Repo')

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
        const branches = await getAllBranchesFunction()
        res.json({
            success:true,
            message:"successfully fetched all branches",
            branches
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = { createBranch,getAllBranches }