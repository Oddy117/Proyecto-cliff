//variables java
const usuarios = [
    {
        usuario: "hugo",
        contrasena: "123"
    },
    {
        usuario: "choom",
        contrasena: "123"
    },
    {
        usuario: "chato",
        contrasena: "nightcity"
    }
]
const rutas = []
let sesionOk = false
let usuarioActual = ""
//variables de vienen del hmtl
//Inicio de sesion
let usuariohtml = document.getElementById("usuario")
let contrasenahtml = document.getElementById("contrasena")
let iconoSesion = document.getElementById("icono_de_sesion")

//Registro nuevo usuario
let nuevoUsuario = document.getElementById("nuevo-usuario")
let nuevaContraseña = document.getElementById("nueva-contraseña")
let iconoUsuarioRegistrado = document.getElementById("icono_usuario_registrado")

//ingreso de datos de ruta
let ruta = document.getElementById("nombre-de-la-ruta")
let hora = document.getElementById("la-hora")
let experiencia = document.getElementById("experiencia")

//botones
let botonInicio = document.getElementById("boton-inicio-sesion")
let botonCierre = document.getElementById("boton-cierre-sesion")
let botonRutas = document.getElementById("boton-ruta")
let botonregistro = document.getElementById("boton-de-registro")

//parrafos
let confirmacionInicio = document.getElementById("inicie-sesion")

//listas
let articulo = document.getElementById("lista-de-rutas")

//escucha botones
botonInicio.addEventListener("click", sesionIniciada)
botonRutas.addEventListener("click", agregarRuta)
botonCierre.addEventListener("click",sesionCerrada)
botonregistro.addEventListener("click",registrarUsuario)


function registrarUsuario(){
    let permiso = true
    for(let i = 0; i < usuarios.length; i++){
        if(nuevoUsuario.value === usuarios[i].usuario){
            permiso = false
            break
        }
    }
    if(permiso && nuevoUsuario.value && nuevaContraseña.value){
        usuarios.push({usuario: nuevoUsuario.value, contrasena: nuevaContraseña.value})
        nuevoUsuario.value = ""
        nuevaContraseña.value = ""
        iconoUsuarioRegistrado.innerHTML = "🟢 Usuario registrado con exito"
    }
    else if(nuevoUsuario.value === "" || nuevaContraseña.value === ""){
        iconoUsuarioRegistrado.innerHTML = "🟡 Falta usuario o contraseña"
    }
    else{
        nuevoUsuario.value = ""
        nuevaContraseña.value = ""
        iconoUsuarioRegistrado.innerHTML = "🔴 Usuario no disponible"
    }    
}

//Nota temporal NO olvidar el .value que es = al valor que se escribe en el input
function sesionIniciada(){
    for (let i = 0; i < usuarios.length; i++){
        if(usuariohtml.value===usuarios[i].usuario && contrasenahtml.value===usuarios[i].contrasena){
            sesionOk = true
            iconoSesion.innerHTML = "🟢 Sesion iniciada"
            usuariohtml.value = ""
            contrasenahtml.value = ""
            confirmacionInicio.innerHTML = "" 
            usuarioActual = usuarios[i].usuario
        }
    }
    if(!sesionOk){// e igual a sesionOk == false
        console.log("usuario o contraseña incorrectas")
    }
}


function sesionCerrada(){
    if(sesionOk){ // sesionOK == true es lo mismo que sesionOK
        sesionOk = false
        console.log("sesion cerrada")
        iconoSesion.innerHTML = "🔴 Sesion no iniciada"
    }
}


function agregarRuta(){
    if(sesionOk && ruta.value && hora.value && experiencia.value){
        rutas.push({usuario: usuarioActual, ruta: ruta.value, hora: Number(hora.value), experiencia: experiencia.value})
        ruta.value = ""
        hora.value = ""
        experiencia.value = ""
        articulo.innerHTML = ""

        for(let i = 0; i < rutas.length; i++){
            let article = document.createElement('article')
            article.innerHTML = `<p>Usuario👤 : ${rutas[i].usuario} </p> <p> Ruta🏔️ : ${rutas[i].ruta} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Horas⏱️ : ${rutas[i].hora}</p> <p>Experiencia📝 : ${rutas[i].experiencia}</p>`
            articulo.appendChild(article)
        }
    }
    else if(sesionOk && (!ruta.value || !hora.value || !experiencia.value)){
        confirmacionInicio.innerHTML = "Rellena todos los campos"
    }
    else{
        confirmacionInicio.innerHTML = "Inicie sesion antes de agregar rutas"
    }   
}


