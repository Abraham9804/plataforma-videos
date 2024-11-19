import {conexionApi} from './conexion.js'

const formulario = document.querySelector("[data-formulario]")

async function crearVideo(e){
    e.preventDefault()
    const url = formulario.querySelector("#url").value
    const titulo = formulario.querySelector("#titulo").value
    const imagem = formulario.querySelector("#imagem").value
    const descripcion = Math.floor(Math.random()*10).toString()

    try{
        await conexionApi.crearVideo(titulo,descripcion,url,imagem)
        window.location.href= "../pages/envio-concluido.html"
    }
    catch(err){
        alert(err)
    }
    
}

formulario.addEventListener("submit",e => crearVideo(e))