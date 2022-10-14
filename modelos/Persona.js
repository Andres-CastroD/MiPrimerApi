const mongoose = require('mongoose');


let PersonaSchema = new mongoose.Schema({
    TipoDocumento: Number,
    NumeroDocumento: Number,
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    CorreoElectronico: String,
    TelefonoFijo: Number,
    TelefonoCelular: Number,
    LinkComprobante: String,
    CodigoIcfes: String,
    FamiliarUniversidad: Number,
    Estrato: Number,
    TipoColegio: Number

});

module.exports = mongoose.model('persona', PersonaSchema, 'Personas');

