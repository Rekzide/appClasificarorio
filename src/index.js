require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/user');
const torneoRoute = require('./routes/torneo');
const mongoose = require('mongoose');

//settings
const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());
app.use("/v1/api", userRoute);
app.use("/v1/api", torneoRoute);
app.use((request, response) => {
    response.status(404).json({
        error: 'not found'
    })
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connect to Attlas'))
    .catch((error ) => console.log('error', error));


app.listen(port, () => console.log('Server running on port ', port));



