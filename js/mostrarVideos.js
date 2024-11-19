import {conexionApi} from "./conexion.js"

const lista = document.querySelector("[data-lista]")

export default function crearCard(titulo,descripcion,url,imagem){
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `<li class="videos__item">
                            <iframe width="100%" height="72%" src="${url}"
                                title="${titulo}" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <div class="descripcion-video">
                                <img src="${imagem}" alt="logo canal alura">
                                <h3>${titulo}</h3>
                                <p>${descripcion}</p>
                            </div>
                        </li>`
    return video
}

async function mostrarVideos(){
    try{
        const listaApi = await conexionApi.listarVideos()
        listaApi.forEach(video => {
            lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem))
        });
    }
    catch(err){
        console.log(err)
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un error en la conexion</h2>`
    }
}

mostrarVideos()