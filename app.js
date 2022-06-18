require ('dotenv').config();
const express = require('express');
const app = express();
const mongo = require('./connection/mongoconn');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3001;

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