const { addFavorites, searchFavorite } = require('../services/favoriteService'); 

const RegisterFavorites = async (req, res) => {
    try {
        const {id} = req.payload;
        const favorite = req.params;
        const { statusHttp, response} = await addFavorites(id, favorite); 
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const SearchFavorites = async (req, res) => {
    try {
        const idUser = req.params.idUser;
        //const idProperty = req.params.idProperty;
        const { statusHttp, response} = await searchFavorite(idUser); 
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {    
    RegisterFavorites,
    SearchFavorites
}