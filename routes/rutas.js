import express  from "express";


//VOY A SEPARAR Y PERSONALIZAR LAS RUTASDE CADA SERVICIO...

export let rutas = express.Router()

rutas.get('/hotelesBooking/habitaciones', function (req, res) {
    res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
})

//2. PETICION DE TIPO GET para buscar todas las habitaciones por ID.
rutas.get('/hotelesBooking/habitacion', function (req, res) {
    res.send('ESTOY BUSCANDO UNA HABITACION')
})

//3. PETICION DE TIPO POST para agregar habitaciones por BD.
rutas.post('/hotelesBooking/registrarhabitacion', function (req, res) {
res.send('ESTOY AGREGANDO UNA HABITACION')
})

//4. PETICION DE TIPO PUT para editar una habitaciones.
rutas.put('/hotelesBooking/modificarhabitacion', function (req, res) {
    res.send('ESTOY ACTUALIZANDO UNA HABITACION')
})

//5. para buscar la reserva
rutas.get('/hotelesBooking/buscareserva', function (req, res) {
res.send('ESTOY BUSCANDO TODAS LAS RESERVAS')
})

//6.  para buscar la reserva por ID.
rutas.get('/hotelesBooking/buscareserva/id:', function (req, res) {
    res.send('ESTOY BUSCANDO TODAS LAS RESERVAS POR ID:')
})

//7. PETICION DE TIPO POST para agregar habitaciones por BD.
rutas.post('/hotelesBooking/creareservas', function (req, res) {
res.send('ESTOY CREANDO UNA RESERVA')
})

//8. PETICION DE TIPO PUT para editar una habitaciones.
rutas.put('/hotelesBooking/editandoreserva', function (req, res) {
    res.send('ESTOY ACTUALIZANDO UNA RESERVA')
})

//9. PETICION DE TIPO PUT para editar una habitaciones.
rutas.delete('/hotelesBooking/eliminareserva', function (req, res) {
res.send('ESTOY ELIMINANDO UNA RESERVA')
})