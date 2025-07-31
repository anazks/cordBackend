const express = require('express')
const bcrypt = require('bcryptjs')
const { createInstitution,findInstitute } = require('../Repo/authRepo')
const jwt = require('jsonwebtoken')

module.exports.hashPassword = async (data) => {
   try {
        let saltRound = 10
        const hashed = await bcrypt.hash(data.password,saltRound)
        data.password = hashed
        await createInstitution(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}

module.exports.institutionLoginFunction = async (data) => {
    try {
        let institute = await findInstitute(data)
        console.log(institute,"institute")
        console.log(institute,"user data")
        let {password} = data;
        console.log(data)
        const isMatch = await bcrypt.compare(password,institute[0].password)
        if(!isMatch){   
            throw new Error('invalid password');
        }
        console.log(institute[0]._id,"institute_id.............")
        let instituteId = institute[0]._id
        const token = jwt.sign({id:instituteId}, "this_is_secretKey", {expiresIn: '1h'})
        let {institutionName} = institute[0]
        let {mobileNumber} = institute[0]
        let instituteData = {
            institutionName,
            mobileNumber,
            token
        }
        console.log(instituteData,token,"institute data with token")
        return(instituteData)
    } catch (error) {
        console.log(error)
    }
}