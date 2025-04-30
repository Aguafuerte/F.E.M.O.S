
// Elementos del DOM
const cuadriculaComentarios = document.querySelector('.cuadricula-comentarios');
const Inombre = document.getElementById('nombre');
const Iedad = document.getElementById('edad');
const Itrastorno = document.getElementById('trastorno');
const Icomentario = document.getElementById('comentario');
const Icontacto = document.getElementById('contacto');
const btn = document.getElementById('btn');

let comentarios = [{
    id : 0,
    nombre : "Tomas",
    edad : 26,
    trastorno : "TDAH",
    comentario : "Cuando me diagnosticaron fue un alivio para mí, creo que todos deberíamos de ser consientes sobre nuestra mente, tengo muchas experiencias, si necesitan ayuda contáctenme.",
    contacto : "Tom450td@gmail.com"
},
{
    id : 1,
    nombre : "Laura",
    edad : 34,
    trastorno : "Trastorno de Ansiedad Generalizada",
    comentario : "Después de años lidiando con una preocupación constante que parecía no tener causa específica, finalmente busqué ayuda profesional. Mi diagnóstico de TAG me ayudó a entender que no estaba exagerando como me decían. Todavía tengo días difíciles, pero ahora tengo herramientas para manejarlos. Si estás pasando por algo similar. No estás solo/a en este camino.",
    contacto : "LauraMendez@gmail.com"
},
]

function agregarComentario() {
    comentarios.push({
        id : comentarios.length,
        nombre : Inombre.value,
        edad : Iedad.value,
        trastorno : Itrastorno.value,
        comentario : Icomentario.value,
        contacto : Icontacto.value,
    })
}
// Mostrar productos en la página
function mostrarComentarios() {
    cuadriculaComentarios.innerHTML = '';
        
    comentarios.forEach(comentario => {
        const tarjetaComentario = document.createElement('div');
        tarjetaComentario.classList.add('tarjeta-comentario');

        
        tarjetaComentario.innerHTML = `
            <div class="info-comentario">
                <h3 class="nombre-comentario">${comentario.nombre}</h3>
                <h4 class="trastorno-comentario">${comentario.trastorno}</h4>
                <p class="edad-comentario">${comentario.edad}</p>
                <p class="comentario-comentario">${comentario.comentario}</p>
                <p class="contacto-comentario">${comentario.contacto}</p>
            </div>
        `;
        
        cuadriculaComentarios.appendChild(tarjetaComentario);
            
    });   
}

document.addEventListener("DOMContentLoaded", mostrarComentarios)
btn.addEventListener("click", agregarComentario)
btn.addEventListener("click", mostrarComentarios)