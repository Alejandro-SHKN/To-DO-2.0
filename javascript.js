// let divRojo = document.getElementById(`ID-div__interior`);
// let parrafoDivRojo = document.querySelector(`.p__color`);

// divRojo.addEventListener(`click`, function () {
//   if (divRojo.style.backgroundColor != `green`) {
//     divRojo.style.backgroundColor = `green`;
//     parrafoDivRojo.textContent = `¡Tienes acceso!`
// } else{
//     divRojo.style.backgroundColor = `red`;
//     parrafoDivRojo.textContent = `No tienes acceso`

//   }
// });

// let botonInterno = document.getElementById(`botonInterno`);
// let imagenMkhalifa = document.getElementById(`ID-imagenMK`);

//     botonInterno.addEventListener(`click`,function(){
//         if(imagenMkhalifa.style.display != `flex` && divRojo.style.backgroundColor == `green`){
//             imagenMkhalifa.style.display = `flex`
//         } else {
//             imagenMkhalifa.style.display = `none`

//         }
//     })

let divPadre = document.getElementById(`ID-div__padre`);
let divPrincipal = document.getElementById(`ID-div__principalcontainerh1`);
let h1Titulo = document.getElementById(`ID-h1__titulo`);
// Botones Agregar y Borrar Divs
let botonAgregarDiv = document.getElementById(`ID-button__agregarDiv`);
let botonBorrarDiv = document.getElementById(`ID-button__borrarDiv`);

// Creando un nuevo div dentro del div principal
// let nuevoDiv = document.createElement(`div`)
// nuevoDiv.classList.add(`div__containerHijo`)
// nuevoDiv.innerHTML = `<h2 class="h1__titulohijo 1" id="ID-h1__titulo hijo1">Este es nuevo div agregado con JS</h2>`
// divPrincipal.appendChild(nuevoDiv)

/*Obteniendo el valor del textarea */
/*Importante recordar que value es para elementos de formulario si queremos acceder a el contenido de otros archivos usamos textcontent  */
/* Utilizando una funcion para agregar un div hijo*/
botonAgregarDiv.addEventListener(`click`, function () {
    let valorTextarea = document.getElementById(`ID-textarea__tarea`).value;
    if(valorTextarea == ""){
        alert(`Por favor introduce una tarea para agregar`)
    } else {
        let nuevoDiv = document.createElement(`div`);
        nuevoDiv.classList.add(`div__containerHijo`);
        nuevoDiv.innerHTML = `<h2 class="h1__titulohijo 1" id="ID-h1__titulo hijo1">${valorTextarea}</h2><button class="button__borrarTarea" id="ID-button__borrarTarea"><img class="img__basuraLogo"src="https://i.postimg.cc/MGnt1xY7/trash-bin.png" alt=""></button>`;
        divPrincipal.appendChild(nuevoDiv);
        
        // Agregamos evento click al botón de borrar
        let botonBorrar = nuevoDiv.querySelector(`#ID-button__borrarTarea`);
        botonBorrar.addEventListener(`click`, function(){
            this.parentElement.remove();
        })
    }
});
