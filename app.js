//variables java
const rutas = []
const usuariojs = "123"
const contrasenajs = "123"
let sesionOk = false

//variables de vienen del hmtl

let usuariohtml = document.getElementById("usuario")
let contrasenahtml = document.getElementById("contrasena")
let botonInicio = document.getElementById("boton-inicio-sesion")
let botonCierre = document.getElementById("boton-cierre-sesion")

let ruta = document.getElementById("tu-ruta")
let botonRutas = document.getElementById("boton-ruta")
let lista = document.getElementById("lista-de-rutas")
let pinicie = document.getElementById("inicie-sesion")


botonInicio.addEventListener("click", sesionIniciada)
botonRutas.addEventListener("click", agregarRuta)
botonCierre.addEventListener("click",sesionCerrada)


//else vacios pueden borrarse
//Nota temporal NO olvidar el .value que es = al valor que se escribe en el input
function sesionIniciada(){
    if(usuariohtml.value===usuariojs && contrasenahtml.value===contrasenajs){
        console.log("iniciaste")
        sesionOk = true
        usuariohtml.value = ""
        contrasenahtml.value = ""
        pinicie.innerHTML =  ""
    }
}


function sesionCerrada(){
    if(sesionOk){ // sesionOK == true es lo mismo que sesionOK
        sesionOk = false
        console.log("sesion cerrada")
    }
}


function agregarRuta(){
    if(ruta.value && sesionOk){
        rutas.push(ruta.value)
        ruta.value = ""
        lista.innerHTML = ""

        for(let i = 0; i < rutas.length; i++){
            let li = document.createElement('li')
            li.textContent = rutas[i]
            lista.appendChild(li)
        }
    }
    else{
        pinicie.innerHTML = "Inicie sesion antes de agregar rutas"
    }   
}


