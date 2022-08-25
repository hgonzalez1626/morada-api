const jwt = require('jsonwebtoken')

const generateJWT = (id) =>{
    return jwt.sign(
        { id }, process.env.JWT_SECRET,{
        expiresIn: "4h",
    })
}

module.exports = generateJWT;