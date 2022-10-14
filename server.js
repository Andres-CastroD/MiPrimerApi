const exp = require('constants');
const {application} = require('express');
const express = require('express');
const mongoose = require('mongoose');
const personaSchema = require("./modelos/Persona.js");

const app = express();

const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Conexión a la base de datos
mongoose.connect("mongodb+srv://Admin:Admin123@clusterprogwebg35.vnoobkj.mongodb.net/Universidad?retryWrites=true&w=majority");


//Operaciones  CRUD
router.get('/',(req, res) => {
    res.send("El API Esta arriba")
});

router.get('/persona', (req, res) => {
    personaSchema.find(function(err, datos){
        if (err) {
            console.log(err);
        } else {
            res.send(datos);
            
        }
    });
        
});

router.post('/persona', (req, res) => {
    let nuevaPersona = new personaSchema({
        TipoDocumento: req.body.TipoDocumento,
        NumeroDocumento: req.body.NumeroDocumento,
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Direccion: req.body.Direccion,
        CorreoElectronico: req.body.CorreoElectronico,
        TelefonoFijo: req.body.TelefonoFijo,
        TelefonoCelular: req.body.TelefonoCelular,
        LinkComprobante: req.body.LinkComprobante,
        CodigoIcfes: req.body.CodigoIcfes,
        FamiliarUniversidad: req.body.FamiliarUniversidad,
        Estrato: req.body.Estrato,
        TipoColegio: req.body.TipoColegio
    })

    nuevaPersona.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send("Persona registrada correctamente")
    })
});

app.use(router);

app.listen(
    4000, () => {
        console.log("Server listen port 4000")
    }
);














//console.log("prueba servidor");

