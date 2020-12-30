/*
while(condición){
    ..instrucciones..
    ..ajuste..
}
*/
// var num = 1;
// while(num <= 10){
//     document.write(num + "<br>");
//     num++;//num = num + 1;
// }
/*
do{
    ..instrucciones..
    ..ajuste
}while(condición);
*/
// var num = 1;
// do {
//     document.write(num + "<br>");
//     num++;
// } while (num <= 10);

//EJEMPLO DE DO WHILE
// var texto = "";
// do {
//     var palabra = window.prompt("Escribe una palabra");
//     texto += palabra;// texto = texto + palabra;
// } while (window.confirm("desea continuar?"));
// document.write(texto);
// console.log(2**3);//potencia

/*
for(variable;condición;ajuste){
    ..instrucciones...
}
*/
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }
/*
    solicitar al usuario un número, imprimir tabla 
    multiplicar
    2 x 1 = 2
    2 x 2 = 4
*/
// var num = window.prompt("Ingrese un número");
// for (var i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num*i);
// }

//ARREGLOS
// var edad = [20, 5, 4, 10, 8, 6, 21, 40, 1];
// console.log(edad[2]);
// var datos = ["Juan", 10, true, 80.2];
// var nombre = new Array('Carlos', 'Ricardo', 'Luisa');
// console.log(datos.length);//tamaño del Array
// var tam = edad.length;
// edad[2] = 100;
// for (var i = 0; i < tam; i++) {
//     document.write(edad[i] + "<br>");
// }
 var atletas = ["Juan", "Cristian", "Nicolas", "Lucas", "Pablo", "Walter"];
// var tiempo = [20, 5, 8, 15, 5, 3];
// var menor = tiempo[0];
// var dato = 0;
// for (var i = 0; i < tiempo.length; i++) {
//     if (tiempo[i] < menor) {
//         menor = tiempo[i];
//         dato = i;
//     }
// }

// document.write("El ganador es: " + atletas[dato] + " con un tiempo de: " + menor);

var num = [20, 5, 4, 10, 8, 6, 2, 12, 21, 1];
//document.write(atletas.sort());//ordenar los string de un arreglo
//num.push(250);//insertar al final
//num.pop();//eliminar al final
//num.unshift(5);//inserta al principio
//num.shift();//eliminar al principio
//document.write(num)
var meses = ['diciembre','enero', 'abril','agosto'];
//meses.splice(1,0,'mayo');//agregó mayo en el indice 1
meses.splice(3,1,'mayo');//reemplazó mayo al indice 3
document.write(meses)

var persona1= ['leer','cantar','dormir','bailar','jugar'];
var persona2= ['cantar','comer','escribir','dormir','manejar'];
var actividad=[];
//mostrar actividades en común 

