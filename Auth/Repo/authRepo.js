const Institute = require('../../Institute/Models/Institute')


module.exports.createInstitution = async (data) => {
    try {
       const institute = await Institute.create(data) 
       return institute;
    } catch (error) {
        console.log(error)
    }
}

module.exports.findInstitute = async (data) => {
    try {
        let {email} = data 
        return await Institute.find({email:email})
    } catch (error) {
        console.log(error)
    }
}