import { API } from './API.js'

let servidorhotel = new API()
servidorhotel.LevantarServidor();

//traigo libreria que controla variables de entorno....
import * as dotenv from 'dotenv'
dotenv.config()

// const express = require('express') Forma vieja de IMPORTAR
//import  express  from 'express'; //FORMA MODERNA...








//APP ES LA VARIABLE QUE ALMACENA TODA LA FUNCINABILIDAD DE EXPRESS.
//const app = express()

//ATENDIENDO PETEICIONES Y RESPONDIENDO LOS SERVICIOS DE MI SERVIDOR.

//1. PETICION DE TIPO GET para buscar todas las habitaciones



//ENCENDIDIENDO EL SERVIDOR EEN EL PUERTO 3000

// app.listen(process.env.PORT,function(){
//     console.log('servidor encendido')
// })
