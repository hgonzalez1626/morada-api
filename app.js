const express = require('express');
const app = express();
const mongo = require('./connection/mongoconn');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3001;

const userRouters = require('./routes/users');
const propertiesRouters = require('./routes/properties');

app.use('/users', userRouters);
app.use('/properties', propertiesRouters);

app.listen(port, () => {
    console.log('Server running');
});