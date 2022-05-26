const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = (email, password) => {
    if (email === "hgonzalez1626@gmail.com" && password === '123456'){
        return responseOk({token: 'xxxxxxxxyyyyy452111789'})            
        }
        return responseError(401, "User unauthorized");       
}

const register = (name, email, movil, password, confirmPassword, typeUser) => {
    if (name === "HectorG" && email === "hg1626@gmail.com" && movil === "3176567288" && password === "123456" && confirmPassword === "123456" && typeUser === "1"){
        return responseOk("User register with exit")            
        }
        return responseError(401, "User not register");
}

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
        return responseOk("User Update with exit")            
        }
        return responseError(401, "User not update");
}

const inactive = (token) => {
    if (token === "xxxxxxxxyyyyy452111789"){
        return responseOk("User Inactive with exit")            
        }
        return responseError(401, "User not Inactive");
}

module.exports = {
    auth,
    register,
    forget,
    reset,
    update,
    inactive
}