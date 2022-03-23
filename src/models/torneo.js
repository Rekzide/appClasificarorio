const mongoose = require('mongoose');

const torneoSchema = mongoose.Schema({
    edad :{
        type: Number,
        required: true,
    },
    apodo :{
        type: String,
        required: true,
    },
    nombre :{
        type: String,
        required: true,
    },
    comuna :{
        type: String,
        required: true,
    },
    ranking :{
        type: Number,
        required: true,
    },
    direccion :{
        type: String,
        required: false,
    },
    fechaIncripcion :{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Torneo', torneoSchema);