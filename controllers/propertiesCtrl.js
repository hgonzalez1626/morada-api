
const { addRegister, 
        getProperties, 
        getPropertiesOwner, 
        getProperty, 
        update, 
        deleteProperty } = require('../services/propertiesService'); 

const Register = async (req, res) => {
    try {
        const property = req.body;
        const {id} = req.payload;                
        const { statusHttp, response} = await addRegister(property, id); 
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}


const GetPropertiesOwner = async (req, res) => {
    try {                                
        const { statusHttp, response} = await getPropertiesOwner(req.payload); 
        res.status(statusHttp).json(response);
    } catch (error) {        
        res.status(500).send(error);
    }
}

const GetAll = async (req, res) => {
    try {
        const filter = req.query;
        const {statusHttp, response} = await getProperties(filter);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const SearchId = async (req, res) =>{
    try {        
        const idProperty = req.params.idProperty;        
        const { statusHttp, response} = await getProperty(idProperty);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);      
    }
};

const uploadImage = (req, res) =>{
    if(!req.files){
        res.status(400).send('Not files uploads');
    }

    const propertyImage = req.files.propertyImage;
    //console.log('mimetype', propertyImage.mimetype)
    const nameSplited = propertyImage.name.split('.');
    const ext = nameSplited[nameSplited.length - 1];
    const newFileName = Math.floor(Date.now()) + '.' + ext;
    console.log('ext:',newFileName)

    const path = __dirname + '/../public/Images/' + newFileName;
    propertyImage.mv(path, (err)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.send({fileName: newFileName})
    })
};

const Delete = async (req, res) => {
    try {        
        const propertyId = req.params;              
        const { statusHttp, response} = await deleteProperty(propertyId);         
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
}

const Update = async (req, res) => {
    try {
        const userId = req.params.idUser;
        const propertyId = req.params.idProperty;
        const property = req.body;
        const { statusHttp, response} = await update(userId, propertyId, property); 
        res.status(statusHttp).json({msg: response});
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {    
    Register,
    GetPropertiesOwner,
    GetAll,
    SearchId,         
    Update,
    Delete,
    uploadImage
}
