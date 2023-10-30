var respuestaConex = new XMLHttpRequest();

respuestaConex.onreadystatechange = function(){

    //Respuesta done = 4
    if(respuestaConex.readyState === 4){
        //El Status debe de estar entre 200 y 299 para conectarse
        if(respuestaConex.status >= 200 && respuestaConex.status <= 299){
            console.log(JSON.parse(respuestaConex.responseText));
        }else{
            onsole.log('Error de conexion');
        }
    }
}

respuestaConex.open('GET', 'https://www.google.es/', true);

respuestaConex.send();