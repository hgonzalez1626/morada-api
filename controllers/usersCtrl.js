const { auth, register, forget, reset, update, inactive } = require('../services/userService'); 

const Register = async (req, res) =>{
    try {
        const user = req.body;        
        const { statusHttp, response} = await register(user);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const login = async (req, res) =>{
    try {
        const user = req.body;
        const { statusHttp, response} = await auth(user);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};


const forgetPassword = (req, res) =>{
    try {
        const user = req.body;
        const { statusHttp, response} = forget(user.email, user.movil);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const resetPassword = (req, res) =>{
    try {
        const user = req.body;
        const { statusHttp, response} = reset(user.email, user.password, user.confirmPassword);
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
    login,
    Register,
    forgetPassword,
    resetPassword,
    Update,
    Inactive
}

