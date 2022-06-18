const { addRequest } = require('../services/requestService'); 

const RegisterRequest = async (req, res) => {
    try {
        const {id} = req.payload;
        const propertyId = req.params;
        const comment = req.body.comments;
        const { statusHttp, response} = await addRequest(id, propertyId, comment); 
        res.status(statusHttp).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
}

module.exports = {    
    RegisterRequest
}