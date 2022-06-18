const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const FavoriteModel = require('../models/favoriteModel');

const addFavorites = async (id, propertyFavorite) => {
    const ownerId =  id;
    const _id =  propertyFavorite.idProperty;
    const favorite = await FavoriteModel.findOne({property_id: _id, user_id: ownerId});
    if (favorite){
        return responseError(401, 'Property favorite for user exist');
    }
    try {        
        const favorite = new FavoriteModel({property_id: _id, user_id: ownerId});
        await favorite.save();
        return responseOk({favorite: 'Property favorite Register with exit'}); 
    } catch (error) {        
        return responseError(500, "Server Error");
    }               
}

module.exports = {    
    addFavorites    
}