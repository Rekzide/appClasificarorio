require('dotenv').config();

const express = require('express');
const userRoute = require('./routes/user');
const torneoRoute = require('./routes/torneo');
const mongoose = require('mongoose');

/**
 * Settings
 */
const app = express();
const port = process.env.PORT || 9001;

/**
 * Configuracion de Rest
 */
app.use(express.json());
app.use("/v1/api", userRoute);
app.use("/v1/api", torneoRoute);
app.use((request, response) => {
    response.status(404).json({
        error: 'not found'
    })
})

/**
 * Conexion a BBDD Mongo Db
 */
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connect to Attlas'))
    .catch((error ) => console.log('error', error));

/**
 * Listener
 */
app.listen(port, () => console.log('Server running on port ', port));



