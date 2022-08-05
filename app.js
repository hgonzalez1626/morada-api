require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload')
const mongo = require('./connection/mongoconn');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.use(cors());
app.use(fileUpload());
const port = 3001;
/*
const whiteList = [process.env.URL_API];

const corsOption ={
    origin: function(origin, callback){
        if (whiteList.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Error de cors"));
        }
    }
};

app.use(cors(corsOption));
*/
const userRouters = require('./routes/users');
const propertiesRouters = require('./routes/properties');
const favoritesRouters = require('./routes/favorites');
const requestRouters = require('./routes/request');

app.use('/users', userRouters);
app.use('/properties', propertiesRouters);
app.use('/favorites', favoritesRouters);
app.use('/request', requestRouters);

app.listen(port, () => {
    console.log('Server running');
});