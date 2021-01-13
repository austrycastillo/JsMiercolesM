// function mostrar() {
//     let div = document.createElement('div');
//     div.innerHTML = '<p>Hola soy un nuevo elemento</p>';
//     document.body.appendChild(div);
// }
// const ul = document.querySelector("ul");
// let li = document.createElement('li');
// li.innerText = 'Productos';
// ul.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'Nosotros';
// ul.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'Contacto';
// ul.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'Inicio';
// ul.appendChild(li);

/*
JQUERY librería:
$("selector").acción()
Algunos métodos o acciones: text, html, val, show, hide, click, mouseover, focus
*/
//var titulo = $("h1").text();
//alert(titulo);
//$("h1").text('Soy otro texto');
$('#aparece').click(aparecer);
$('#desaparece').click(desaparecer);
function desaparecer() {
    //$('div').hide();
    $('div').fadeOut("slow");
}
function aparecer() {
    //$('div').show();
    $('div').fadeIn("slow");
}