var clientes = [
    { 'nombre': 'Cristian', 'apellido': 'Asprela', 'edad': 52 },
    { 'nombre': 'Lucas', 'apellido': 'Perez', 'edad': 23 },
    { 'nombre': 'Nicolas', 'apellido': 'Alfonsin', 'edad': 15 },
    { 'nombre': 'Pablo', 'apellido': 'Koegler', 'edad': 18 },
    { 'nombre': 'Cristian', 'apellido': 'Terrazas', 'edad': 36 }
];

let boton = document.querySelector("button");
boton.onclick = agregarCliente

function agregarCliente() {
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var ed = document.getElementById("edad").value;
    clientes.push({ 'nombre': nom, 'apellido': ape, 'edad': ed });
    mostrarTabla();
}

function mostrarTabla() {
    var mensaje = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>";
    for (var i = 0; i < clientes.length; i++) {
        mensaje += "<tr><td>" + clientes[i].nombre + "</td><td>" + clientes[i].apellido + "</td><td>" + clientes[i].edad + "</td></tr>";
    }
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = mensaje;
}
mostrarTabla();