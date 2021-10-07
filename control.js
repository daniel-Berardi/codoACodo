
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");

function enviarFormulario(){
    if(usuario.value.includes("@")){
    }else{
        alert("El usuario debe contener un @");
    };
    if(usuario.value === null || usuario.value === ""){
        alert("El usuario no puede estar Vacio");
    };

    if(clave.value === null || clave.value === ""){
        alert("La clave no puede estar Vacia");
    };
 };