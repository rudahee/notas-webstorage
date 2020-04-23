function obtenerDatosNota() {
    let tituloObj  = document.getElementById('titulo-menu');
    let textoObj = document.getElementById('textarea-menu-form');
    let colorObj = document.getElementById('select-color-form'); 
    titulo = tituloObj.value;
    texto = textoObj.value;
    color = colorObj.value;
    
    agregarNota(titulo,texto, color);
    
    tituloObj.value=''
    textoObj.value=''
    colorObj.value='rosa'
}

function agregarNota(titulo, texto, color) {
    let container = document.getElementById('container-notas')
    
    let atributoNotas = 'estructura-nota ' + color; 

    let nota = document.createElement('div')
    nota.setAttribute('id', 'nota-'+titulo)
    nota.setAttribute('class', 'estructura-nota '+ color)
    

    let tituloNota = document.createElement('h4')
    tituloNota.textContent = titulo

    let textoNota = document.createElement('p')
    textoNota.textContent = texto

    nota.appendChild(tituloNota)
    nota.appendChild(textoNota)
    container.appendChild(nota)    
}

function cargarDatos() {

    cantidadNotas = localStorage.length/3

    let titulo, texto, color
    for (i=1;i<=cantidadNotas; i++) {

        titulo = localStorage.getItem(i+'=titulo')
        texto = localStorage.getItem(i+'=texto')
        color = localStorage.getItem(i+'=color')

        agregarNota(titulo, texto, color)
        
    }
}


function guardarDatos() {
    notas = document.getElementById('container-notas').childNodes
    cantidadNotas = notas.length
    
    for (let i=1; i<cantidadNotas; i++) {
        titulo = notas[i].childNodes[0].textContent
        texto = notas[i].childNodes[1].textContent
        id = notas[i].id
        color = notas[i].className
        color = color.split(" ")[1]

        localStorage.setItem(i+'=titulo', titulo)
        localStorage.setItem(i+'=texto', texto)
        localStorage.setItem(i+'=color', color)
    }

}

function borrarDatos() {
    localStorage.clear
    localStorage.removeItem('titulo')
    localStorage.removeItem('texto')
    localStorage.removeItem('color')
}
window.onload = function() {
    cargarDatos()
}
