
//Devuelve promesa
fetch('https://www.google.es/')
//Comprueba conexion
.then(respuesta =>{
    if(respuesta.ok){
        return respuesta;
    }
    else{
        throw new Error('Error de conexion');
    }
})
//Respuesta en json
.then(respuesta => respuesta.json())
//Respuesta por consola y con continuacion en .then
.then(respuesta => console.log(respuesta) || respuesta)
//Gestiona errores
.catch(console.error);
