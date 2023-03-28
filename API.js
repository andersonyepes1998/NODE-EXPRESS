import express from "express";
import { rutas } from "./routes/rutas.js";

export class API{

    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }

    LevantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log('Servidor encendido '+process.env.PORT))
    }
    enrutarPeticiones(){
        this.app.use('/',rutas)
    }
    conectarConBD(){}
}