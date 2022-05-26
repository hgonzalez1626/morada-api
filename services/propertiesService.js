const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const register = (zone, type, BType, value, image) => {
    if (zone === "Laureles" && type==="Apartamento" && BType=== "Arriendo" && value=== 2500000 && image=== "Hermosa"){
        return responseOk({property: 'Property Register with exit'});            
        }
        return responseError(401, "Property not Register");
}

const registerComment = (idUser, idProperty, comment) => {
    if (idUser === "120023" && idProperty === "5264" && comment !== "" ){
        return responseOk({property: 'Comment to Property Register with exit'});            
        }
        return responseError(401, "Comment to Property not Register");
}

const searchId = (id) => {
    if (id === "451"){
        return responseOk({property: 'Property Found'});
            
        }
        return responseError(401, "Property not found");       
}

const searchTBT = (type, BType) => {
    if (type === "2" && BType === "1"){
        return responseOk({property: 'Property type and BussinessType Found'});
            
        }        
        return responseError(401, "Property type and BussinessType not found");       
}

const update = (id, zone, type, BType, value, image) => {
    if (id === "451" && zone === "Laureles" && type==="Apartamento" && BType=== "Arriendo" && value=== 2500000 && image=== "Hermosa"){
        return responseOk({property: 'Property Update with exit'});            
        }
        return responseError(401, "Property not Update");
}

const deleteProperty = (idUser, idProperty) => {
    if (idUser === "120023" && idProperty === "5264"){
        return responseOk({property: 'Property delete with exit'});            
        }
        return responseError(401, "Property not delete");
}

module.exports = {    
    register,
    registerComment,
    searchId,
    searchTBT,
    update,
    deleteProperty
}