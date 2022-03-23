const mongoose = require('mongoose');

/**
 * Genera Schemma para BD.
 */
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
    eliminado :{
        type: Boolean,
        require: false
    }
});

module.exports = mongoose.model('Torneo', torneoSchema);