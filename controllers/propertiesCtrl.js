const { register,  registerComment, searchId, searchTBT, update, deleteProperty } = require('../services/propertiesService'); 

const Register = (req, res) => {
    try {
        const property = req.body;
        const { statusHttp, response} = register(property.zona, property.type, property.bussinessType, property.value, property.image); 
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
}

const RegisterComments = (req, res) => {
    try {
        const userId = req.params.idUser;
        const propertyId = req.params.idProperty;
        const property = req.body;
        const { statusHttp, response} = registerComment(userId, propertyId, property.comment); 
        //console.log('req', req);
        //res.send(`ID Usuario ${req.params.idUser}, Propiedad ${req.params.idProperty}`);
        //res.send(`ID Usuario ${userId}, Propiedad ${propertyId}`);
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
}

const SearchId = (req, res) =>{
    try {
        const property = req.params.idProperty;
        const { statusHttp, response} = searchId(property);
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);      
    }
};

const SearchTBT = (req, res) =>{
    try {
        const type = req.query.type;
        const bussinessType = req.query.bussinessType;
        const { statusHttp, response} = searchTBT(type, bussinessType);        
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);      
    }
};

const Update = (req, res) => {
    try {
        const property = req.body;
        const { statusHttp, response} = update(property.id, property.zona, property.type, property.bussinessType, property.value, property.image); 
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
};

const Delete = (req, res) => {
    try {
        const userId = req.params.idUser;
        const propertyId = req.params.idProperty;        
        const { statusHttp, response} = deleteProperty(userId, propertyId);         
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {    
    Register,
    RegisterComments,
    SearchId,
    SearchTBT,
    Update,
    Delete
}
