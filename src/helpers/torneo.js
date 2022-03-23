

/**
 * Agrega información por defecto del participante.
 * 
 * @param { any } info 
 * @returns {any}
 */
const completeInfoPart = async( info ) => {
    const {edad, apodo, nombre, comuna, ranking} = info;
    const toApi = {
        edad,
        apodo,
        nombre,
        comuna,
        ranking,
        eliminado: false,
        fechaIncripcion: new Date().toISOString().toString(),
    }
    return toApi;
}

module.exports = {
    completeInfoPart
}