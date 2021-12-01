const hamburguesa=document.querySelector('.hamburguesa');
const navegacion=document.querySelector('.navegacion');
const enlaces=document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{/*llamando a la funcion*/
    mostrarMenu();
    cerrarMenu();
})

function mostrarMenu(){/*Evento para mostrar el menu de navegacion*/ 
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu(){/*Al dar click a un enlace ocultar hamburguesa*/ 
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click',(e)=>{
            if(e.target.tagName==='A'){
                navegacion.classList.add('ocultar');
            }
        })
    })
}