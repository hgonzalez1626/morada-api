const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const RequestModel = require('../models/requestModel');

const addRequest = async (id, propertyId, propertyComment) => {
    const user_id =  id;
    const property_id =  propertyId.idProperty;   
    //const request = await RequestModel.findOne({property_id: property_id, user_id: user_id});
    if (propertyComment == ""){
        return responseError(401, 'Property request need to comment');
    }
    try {        
        const request = new RequestModel({property_id: property_id, user_id: user_id, comments: propertyComment});
        await request.save();
        return responseOk({request: 'Request Register with exit'}); 
    } catch (error) {               
        return responseError(500, "Server Error");
    }               
}

module.exports = {    
    addRequest    
}