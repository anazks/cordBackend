const express = require('express')
const { hashPassword } = require('../Usecause/authUsecause')
const { institutionLoginFunction } = require('../Usecause/authUsecause')

const institutionRegister = async (req, res) => {
    try {
        const data = req.body
        const institution = await hashPassword(data)
        res.json({
            success:true,
            message: 'Institution registered successfully',
            institution: institution
        })
    } catch (error) {
        console.log(error)
    }
}   

const institutionLogin = async (req,res) => {
    try {
        const data = req.body;
        institute = await institutionLoginFunction(data)
        res.json({
            success:true,
            message:"institute is successfully logined",
            institute
        })
    } catch (error) {
        console.log(error)
    }
}

 

module.exports = {institutionLogin, institutionRegister}