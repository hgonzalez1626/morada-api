const { auth, register, confirm, forget, check, reset, update, inactive, info } = require('../services/userService'); 


const Register = async (req, res) =>{
    try {
        const user = req.body;        
        const { statusHttp, response} = await register(user);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const Confirm = async (req, res) =>{
    try {
        const userToken = req.params.token;        
        const { statusHttp, response} = await confirm(userToken);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const Authenticate = async (req, res) =>{
    try {
        const user = req.body;        
        const { statusHttp, response} = await auth(user);
        res.status(statusHttp).json(response);
    } catch (error) {        
        res.status(500).send(error);      
    }
};

const getUser = async (req, res) => {
    try {
        const {id} = req.payload;         
        const {statusHttp, response} = await info(id);
        res.status(statusHttp).json(response);
    } catch (error) {
        
    }
}

const forgetPassword = async (req, res) =>{
    try {
        const user = req.body;
        const { statusHttp, response} = await forget(user);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const checkToken = async (req, res) =>{
    try {
        const userToken = req.params.token;        
        const { statusHttp, response} = await check(userToken);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const resetPassword = async (req, res) =>{
    try {
        const token = req.params.token;
        const password = req.body.password;
        const { statusHttp, response} = await reset(token, password);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const Update = (req, res) =>{
    try {
        const user = req.body;        
        const { statusHttp, response} = update(user.token, user.name, user.email, user.movil, user.password, user.confirmPassword, user.typeUser);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};


const Inactive = (req, res) =>{
    try {
        const user = req.params.token;        
        const { statusHttp, response} = inactive(user);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

module.exports = {
    Authenticate,
    getUser,
    Register,
    Confirm,
    forgetPassword,
    checkToken,
    resetPassword,
    Update,
    Inactive
}

