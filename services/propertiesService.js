const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const PropertyModel = require('..//models/propertyModel');

const addRegister = async (propertyData) => {

    try {        
        const property = new PropertyModel(propertyData);
        await property.save();
        return responseOk({property: 'Property Register with exit'}); 
    } catch (error) {        
        return responseError(500, "Server Error");
    }         
}

const getProperties = async (filter) => {
    try {
        const query = buildQueryFilter(filter);
        const properties = await PropertyModel.find(query);
        return responseOk(properties);
    } catch (error) {
        return responseError(500, 'Server Error');
    }
}

const buildQueryFilter = (filter) =>{
    const query = {};   
    
    if (filter.city) query.city = Number(filter.city);
    if (filter.zone) query.zone = Number(filter.zone);
    if (filter.propertyType) query.propertyType = Number(filter.propertyType);
    if (filter.bussinessType) query.bussinessType = Number(filter.bussinessType);
    if (filter.ownerId) query.ownerId = String(filter.ownerId);    
    if (filter.status) query.status = Number(filter.status);
    if (filter.minPrice && filter.maxPrice) {
        query.value = { 
            '$gte': Number(filter.minPrice), 
            '$lte': Number(filter.maxPrice) 
        } 
    }
    return query;
}

const getProperty = async (id) => {
    try {
        const property = await PropertyModel.findById(id)
                    .populate("ownerId")
                    .exec()
                    ; 
        if (!property){
            return responseError(401, 'Property not found');
        }else{
            console.log(property);
            return responseOk(property); 
        };
        
    } catch (error) {        
        return responseError(500, 'Server Error');
    }  
}

const deleteProperty = async(propertyDel) => {
    const ownerId =  propertyDel.idUser;
    const _id =  propertyDel.idProperty;
    const property = await PropertyModel.findOne({_id, ownerId});
    if (!property){
        return responseError(401, 'Property or user owner not found');
    }
    try {     
            const property = await PropertyModel.deleteOne({_id});  
            return responseOk('Property delete with exit');                
    } catch (error) {             
        return responseError(500, 'Server Error');
    }  
}

const update = async (userId, propertyId, propertyUpdate) => {
    const ownerId =  userId;
    const _id =  propertyId;    
    const property = await PropertyModel.findOne({_id, ownerId});
    if (!property){
        return responseError(401, 'Property or user owner not found for Update');
    }
    try {     
            const property = await PropertyModel.updateOne({_id},{title: propertyUpdate.title, city: propertyUpdate.city, value: propertyUpdate.value});  
            return responseOk('Property Update with exit');                
    } catch (error) {             
        return responseError(500, 'Server Error');
    }   
}

module.exports = {    
    addRegister,
    getProperties,
    getProperty,       
    update,
    deleteProperty
}