import {conexionApi} from "./conexion.js"
const botonBuscar = document.querySelector("[data-boton-buscar]")

botonBuscar.addEventListener("click",async function(){
    const inputBuscar = document.querySelector("#buscar").value

    try{
        const resultadoBusqueda = await conexionApi.buscarVideo(inputBuscar)
        console.log(resultadoBusqueda)
    }
    catch(err){
        console.log("Ocurrio un error: "+err)
    }
    
})