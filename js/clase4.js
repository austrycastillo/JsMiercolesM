//OBJETOS: CLAVE : VALOR
// var cliente = { nombre: 'Pedro', apellido: 'Perez', edad: 20 };
// console.log(cliente.nombre);
// var alumnos = [
//     { nombre: 'Pablo', edad: 65 },//0
//     { nombre: 'Nicolas', edad: 50 },//1
//     { nombre: 'Cristian', edad: 16 },//2
//     { nombre: 'Walter', edad: 30 }//3
// ];
// console.log('nombre: ' + alumnos[2].nombre + ' edad: ' + alumnos[2].edad);

//FUNCIONES
function saludar() {
    alert("Holaaaa");
}
function saludar2() {
    var saludo = "hola 2";
    return saludo;
}
function saludar3(nombre) {
    alert("Hola " + nombre);
}
function saludar4(nombre = "Fulano") {
    alert("Hola " + nombre);
}
function sumar(a, b, c) {
    var suma = a + b + c;
    return suma;
}
//saludar();
//console.log(saludar2());
//saludar3("Juan");
//saludar4("Ana");
//console.log(sumar(2, 4, 2));
//EJERCICIO LOGUEARSE 
// function solicitarUsuario() {
//     var user = window.prompt("Escribe tu usuario");
//     return user;
// }
// function solicitarClave() {
//     var pass = parseInt(window.prompt("Escribe tu clave"));
//     return pass;
// }
// function loguear(u, c) {
//     if (u == "admin" && c == 123) {
//         var rta = "Si puede acceder";
//     } else {
//         var rta = "datos incorrectos";
//     }
//     return rta;
// }
// var u = solicitarUsuario();
// var c = solicitarClave();
// var mensaje = loguear(u, c);
// document.write(mensaje);
// console.log(u);
// console.log(c);

/*
var: redeclarable, redefinible, scope global
*/
// var x = 2;
// console.log(x);
// if(true){
//     var x = 4;
//     console.log(x);  
// }
// console.log(x);
// var x = 6;
// console.log(x);
/*
let: no redeclarable, redefinible, no scope global
*/
// let y = 2;
// console.log(y);
//                     if (true) {
//                         let y = 4;
//                         console.log(y);
//                     }
// console.log(y);
// y = 6;
// console.log(y);

/*
const: no redeclarable, no redefinible, no scope global
*/
// const c = 2;
// console.log(c);
//                 if(true){
//                     const c = 4;
//                     console.log(c); 
//                 }
// console.log(c);
// //c = 6;//no se puede modificar
// console.log(c);

//EVENTOS CON FOQUITOS
let botonE = document.querySelector("#be");
botonE.onclick = encender;
let botonA = document.querySelector("#ba");
botonA.onclick = apagar;
function encender() {
    document.getElementById('imagen').src = 'on.gif';
}
function apagar() {
    document.getElementById('imagen').src = 'off.gif';
}

/*
Crear una caja para al hacer clic
cambiar de colores
*/
