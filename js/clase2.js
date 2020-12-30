/*
if(condición){
  ...instrucciones..
}else{
    ...instrucciones..
}

if(condición){
  ...instrucciones..
}else if(condición){
    ...instrucciones..
}else if(condición){
    ...instrucciones..
}else{
    ...instrucciones..
}
*/
// var edad = 22;
// if (edad >= 18) {
//     console.log("Puedes pasar a bailar");
//     if(edad == 22){
//         console.log("Por tu edad tienes una bebida gratis ;)");
//     }
// }else{
//     console.log("No puedes pasar, lero lero!")
//     if(edad<12){
//         console.log("por bebito");
//     }else{
//         console.log("por adolescente");
//     }
// }

//PRACTICA 1
/*
Sistema para calcular el salario semanal de un obrero, cada hora 16 U$D (max 40)-> 16*40
horas extras 20U$D (50 horas)
*/
// var salario;
// var horas;
// var valorHoraBase = 16;
// var valorHoraExtra = 20;
// var salarioExtra;
// var horaMax = 40;
// var nombre;
// nombre = window.prompt("Escribe tu nombre");
// horas = parseInt(window.prompt("Escribe cantidad de horas"));
// if (horas <= horaMax) {
//     salario = horas * valorHoraBase;
// } else {
//     salario = valorHoraBase * horaMax;
//     horas = horas - horaMax;
//     salarioExtra = horas * valorHoraExtra;
//     salario = salario + salarioExtra;
// }
// document.write(nombre + " su salario semanal es " + salario);

//EJERCICIO 2
/*
Se solicita un número, informar si tiene una, dos, tres, cuatro cifras o no corresponde
del 1 al 9 una cifra
del 10 al 99 dos cifras 
del 100 al 999 tres cifras
del 1000 al 9999 cuatro cifras
*/
// var num = parseInt(window.prompt("Escribe un número"));
// if (num > 0 && num <= 9) {
//     document.write("El número " + num + " tiene una cifra");
// } else if (num >= 10 && num <= 99) {
//     document.write("El número " + num + " tiene dos cifras");
// } else if (num >= 100 && num <= 999) {
//     document.write("El número " + num + " tiene tres cifras");
// } else if (num >= 1000 && num <= 9999) {
//     document.write("El número " + num + " tiene cuatro cifras");
// } else {
//     document.write("No corresponde con el sistema");
// }

//FECHAS

// var fecha = new Date();
// //var dia = fecha.getFullYear();
// //var dia = fecha.getDate();
// var dia = fecha.getDay();
// console.log(dia);

//SWITCH
/*
switch(variable a evaluar){
    case N1:
        ..intrucciones...
        break;
    case N2:
        ..intrucciones...
        break;
    case N3:
        ..intrucciones...
        break;
    default:
        ..intrucciones..
        break;
}
*/
//LABORATORIO CLASE 2 EJERCICIO 1
var fecha = new Date();
var dia = fecha.getDay();
switch (dia) {
    case 0:
        document.write("Hola, hoy es domingo de descanso");
        break;
    case 1:
        document.write("Hola, hoy es lunes de inicios");
        break;
    case 2:
        document.write("Hola, hoy es martes de asado");
        break;
    case 3:
        document.write("Hola, hoy es miércoles de javascript");
        break;
    case 4:
        document.write("Hola, hoy es jueves de hallacas");
        break;
    case 5:
        document.write("Hola, hoy es viernes de vinos");
        break;
    default:
        document.write("Hola, hoy es sábado!!!!!");
        break;
}
