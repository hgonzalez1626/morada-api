const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const UserModel = require('..//models/userModel');
const GenerateId = require('../utils/generateId');
const GenarateJWT = require('../utils/generateJWT'); 
const {emailRegister, emailForgetPassword} = require('../utils/email');

const register = async (userData) => {
    try {
        if(await validateEmail(userData.email)){
            return responseError(401, "Email exist");
        }                
        const user = new UserModel(userData);
        user.token = GenerateId.generateId();
        await user.save();
        //Send mail confirmation
        emailRegister({
            email: user.email,
            name: user.name,
            token: user.token
        });
        return responseOk('¡User successfully created! Please check your email to confirm your account.')
    } catch (error) {
        console.log(error);
        return responseError(500, "Server Errror");
    }   
};

const confirm = async (token) => {

    const userConfirm = await UserModel.findOne({token});
    if(!userConfirm){
        return responseError(403, "Token not validate")
    }
    try {
        userConfirm.confirmado = true;
        userConfirm.token = "";
        await userConfirm.save();
        return responseOk("Account confirmed successfully")
    } catch (error) {
        return responseError(500, "Server Errror");
    }
    
};

const forget = async (userData) => {    
    const email = userData.email;  
    const user = await UserModel.findOne({email});    
    if(!user){
        return responseError(401, "Email incorrect")
    }
    try {
        user.token = GenerateId.generateId();
        await user.save();
        emailForgetPassword({
            email: user.email,
            name: user.name,
            token: user.token
        })
        return responseOk("Password recovery tokens send to email successfully")
    } catch (error) {        
        return responseError(500, "Server Errror");
    }
   
};

const check = async (token) => {
    const userToken = await UserModel.findOne({token});
    if(!userToken){
        return responseError(404, "Token not validate")
    }else{
        return responseOk("Token validate and User exist")
    }        
};

const reset = async (token, password) => {
    const user = await UserModel.findOne({token});
    if(!user){
        return responseError(401, "Token password recovery incorrect");
    }else{
        user.password = password;
        user.token = '';
        try {
            await user.save();
            return responseOk('Password recovery with exit')
        } catch (error) {
            return responseError(500, "Server Errror");
        }              
    }                     
};

const auth = async (userData) => { 
   
    const email = userData.email;
    const password = userData.password;
 
    const user = await UserModel.findOne({email});
 
    //Check if the user exists
    if(!user){    
        return responseError(401, "User no exist")
    }
    //Check if account is confirmed
     if(!user.confirmado){                      
         return responseError(403, "User account is not confirmed");           
     }
     //Check password
    if(await user.checkPassword(password)){
         return responseOk({ _id: user._id,
                             name: user.name,
                             email: user.email,
                             rol: user.role,
                             token: GenarateJWT(user._id),
                         })
    }else{
         return responseError(403, "Password is Incorrect")
    }     
 };
 

const info = async (id) => {
    try {
        const user = await UserModel.findById(id).select("-password -documentType -document -confirmado -token -createdAt -updatedAt -__v");
        return responseOk(user);        
    } catch (error) {
        return responseError(500, "Server Errror");
    }
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


module.exports = {
    auth,
    info,
    register,
    confirm,
    forget,
    check,
    reset,
    update,
    inactive
}