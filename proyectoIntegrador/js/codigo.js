//MANEJO DEL DOM
//var header = document.getElementById("header");
// var header = document.querySelector("header");
// var header = document.querySelector("#header");
// var header = document.querySelector(".header");
// alert(header.innerHTML);
// console.log(header);
// header.innerHTML = "hola javascript";
// header.style.color="orange";
// header.style.backgroundColor="black";




var rol = window.prompt("Cuál es su rol?");
if (rol == 'admin' || rol == 'recursos') {
    console.log("listo paso 1");
    var clave = window.prompt("escribe tu clave");
    if (clave == 1234) {
        console.log("listo el paso 2");
        var usuario = window.prompt("Escribe tu usuario");
        console.log("listo el paso 3 " + usuario);
        var header = document.querySelector(".header");
        header.innerHTML = "Hola " + usuario + " bienvenido a nuestra aplicación";
        console.log("listo el paso 4");
    } else {
        window.location.href = 'error.html';
        console.log("listo el paso 5");
    }
} else {
    window.location.href = 'error.html';
    console.log("listo el paso 5");
}