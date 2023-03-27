// const express = require('express') Forma vieja de IMPORTAR
import  express  from 'express'; //FORMA MODERNA...

//traigo libreria que controla variables de entorno....
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

console.log(process.env.PORT)

//APP ES LA VARIABLE QUE ALMACENA TODA LA FUNCINABILIDAD DE EXPRESS.
const app = express()

//ATENDIENDO PETEICIONES Y RESPONDIENDO

//1. PETICION DE TIPO GET para buscar todas las habitaciones
app.get('/hotelesBooking/habitaciones', function (req, res) {
  res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
})

//2. PETICION DE TIPO GET para buscar todas las habitaciones por ID.
app.get('/hotelesBooking/habitaciones/:id', function (req, res) {
    res.send('ESTOY BUSCANDO HABITACION POR ID')
  })

//3. PETICION DE TIPO POST para agregar habitaciones por BD.
app.post('/hotelesBooking/habitaciones', function (req, res) {
res.send('ESTOY AGREGANDO UNA HABITACION')
})

//4. PETICION DE TIPO PUT para editar una habitaciones.
app.put('/hotelesBooking/modificarhabitacion', function (req, res) {
    res.send('ESTOY ACTUALIZANDO UNA HABITACION')
  })


//ENCENDIDIENDO EL SERVIDOR EEN EL PUERTO 3000

app.listen(process.env.PORT,function(){
    console.log('servidor encendido')
})
