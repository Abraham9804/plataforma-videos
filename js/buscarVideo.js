import {conexionApi} from "./conexion.js"
import crearCard from "./mostrarVideos.js"

const botonBuscar = document.querySelector("[data-boton-buscar]")

botonBuscar.addEventListener("click",async function(){
    const inputBuscar = document.querySelector("#buscar").value

    try{
        const resultadoBusqueda = await conexionApi.buscarVideo(inputBuscar)
        const lista = document.querySelector("[data-lista]")
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }

        //const resultadoBusquedaJson = resultadoBusqueda.json
        resultadoBusqueda.forEach(video => {
            lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem))
        });
        
    }
    catch(err){
        console.log("Ocurrio un error: "+err)
    }
    
})