async function Conexion(){
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

export const conexionApi = {
    Conexion
}
