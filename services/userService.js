const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const UserModel = require('..//models/userModel');



const auth = async (userData) => {
    try {
        if(await validateLogin(userData.email, userData.password)){                      
            return responseOk({msg: 'Welcome'})            
        }       
        return responseError(401, "Credentials Incorrects");
    } catch (error) {
        return responseError(500, "Server Errror");
    }          
};

const register = async (userData) => {
    try {
        if(await validateEmail(userData.email)){
            return responseError(401, "Email exist");
        }
        const user = new UserModel(userData);
        await user.save();
        return responseOk({user})
    } catch (error) {
        return responseError(500, "Server Errror");
    }   
};

const forget = (email, movil) => {
    if (email === "hg1626@gmail.com" && movil === "3176567288"){
        return responseOk({forget: 'Check Email with you password recovery'})            
        }
        return responseError(401, "Email or Movil incorrect");       
}

const reset = (email, password, confirmPassword) => {
    if (email === "hg1626@gmail.com" && password === "123456" && confirmPassword === "123456"){
        return responseOk({reset: 'Password recovery with exit'})            
        }
        return responseError(401, "Password recovery incorrect");       
}

const update = (token, name, email, movil, password, confirmPassword, typeUser) => {
    if (token === "xxxxxxxxyyyyy452111789" && name === "HectorG" && email === "hg1626@gmail.com" && movil === "3176567288" && password === "123456" && confirmPassword === "123456" && typeUser === "1"){
        return responseOk({msg: 'User Update with exit'})            
        }
        return responseError(401, "User not update");
}

const inactive = (token) => {
    if (token === "xxxxxxxxyyyyy452111789"){
        return responseOk({msg: 'User Inactive with exit'})            
        }
        return responseError(401, "User not Inactive");
}

const validateEmail = async (email) => {
    try {
        const checkMail = await UserModel.findOne({email: email})
        return checkMail ? true : false;
    } catch (error) {
        return responseError(500, "Server Errror");
    }
}

const validateLogin = async (email, password) => {
    try {
        const checkLogin = await UserModel.findOne({email: email, password: password})
        return checkLogin ? true : false;
    } catch (error) {
        return responseError(500, "Server Error");
    }       
}

module.exports = {
    auth,
    register,
    forget,
    reset,
    update,
    inactive
}