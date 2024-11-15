async function listarVideos(){
    try{
        const solicitudFetch = await fetch("http://localhost:3001/videos")
        if(!solicitudFetch.ok){
            throw new Error ("Error en la solicitud")
        }
        const solicitudJson = await solicitudFetch.json()
        return solicitudJson
    }

    catch(error){
        console.log(error)
    }
}

async function crearVideo(titulo,descripcion,url,imagen){
    try{
        const conexionCrear = await fetch("http://localhost:3001/videos",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    titulo: titulo,
                    descripcion: `${descripcion} mil visualizaciones`,
                    url: url,
                    imagen: imagen
                })
            })
        if(!conexionCrear.ok){
            throw new Error(`Error en la solicitud: ${conexionCrear.status} - ${conexionCrear.statusText}`)
        }
        const conexionCrearJson = await conexionCrear.json()
        return conexionCrearJson
    }
    catch(error){
        console.log(error)
    }
}


export const conexionApi = {
    listarVideos, crearVideo
}
