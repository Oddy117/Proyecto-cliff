//variables java
const usuarios = [
    {
        usuario: "admin",
        contrasena: "123"
    }
]
const rutas = []
let sesionOk = false
let usuarioActual = ""

//variables de vienen del hmtl
//Inicio de sesion
const usuarioHtml = document.getElementById("usuario")
const contrasenaHtml = document.getElementById("contrasena")
const iconoSesion = document.getElementById("icono_de_sesion")

//Registro nuevo usuario
const nuevoUsuario = document.getElementById("nuevo-usuario")
const nuevaContraseña = document.getElementById("nueva-contraseña")
const iconoUsuarioRegistrado = document.getElementById("icono_usuario_registrado")

//ingreso de datos de ruta
const ruta = document.getElementById("nombre-de-la-ruta")
const hora = document.getElementById("la-hora")
const experiencia = document.getElementById("experiencia")

//botones
const botonInicio = document.getElementById("boton-inicio-sesion")
const botonCierre = document.getElementById("boton-cierre-sesion")
const botonRutas = document.getElementById("boton-ruta")
const botonRegistro = document.getElementById("boton-de-registro")

//parrafos
const confirmacionInicio = document.getElementById("inicie-sesion")

//listas
const articulo = document.getElementById("lista-de-rutas")

//escucha botones
botonInicio.addEventListener("click", sesionIniciada)
botonRutas.addEventListener("click", agregarRuta)
botonCierre.addEventListener("click",sesionCerrada)
botonRegistro.addEventListener("click",registrarUsuario)


function registrarUsuario(){
    let permiso = true
    for(let i = 0; i < usuarios.length; i++){
        if(nuevoUsuario.value === usuarios[i].usuario){
            permiso = false
            break
        }
    }
    if(permiso && nuevoUsuario.value && nuevaContraseña.value){
        usuarios.push({
            usuario: nuevoUsuario.value,
            contrasena: nuevaContraseña.value
        })
        nuevoUsuario.value = ""
        nuevaContraseña.value = ""
        iconoUsuarioRegistrado.textContent = "🟢 Usuario registrado con exito"
    }
    else if(!nuevoUsuario.value || !nuevaContraseña.value){
        iconoUsuarioRegistrado.textContent = "🟡 Falta usuario o contraseña"
    }
    else{
        nuevoUsuario.value = ""
        nuevaContraseña.value = ""
        iconoUsuarioRegistrado.textContent = "🔴 Usuario no disponible"
    }    
}

//Nota temporal NO olvidar el .value que es = al valor que se escribe en el input
function sesionIniciada(){
    sesionOk = false
    for (let i = 0; i < usuarios.length; i++){
        if(usuarioHtml.value===usuarios[i].usuario && contrasenaHtml.value===usuarios[i].contrasena){
            sesionOk = true
            iconoSesion.textContent = "🟢 Sesion iniciada"
            usuarioHtml.value = ""
            contrasenaHtml.value = ""
            confirmacionInicio.textContent = "" 
            usuarioActual = usuarios[i].usuario
            break
        }
    }
    if(!sesionOk){// e igual a sesionOk == false
        console.log("usuario o contraseña incorrectas")
    }
}


function sesionCerrada(){
    if(sesionOk){ // sesionOK == true es lo mismo que sesionOK
        sesionOk = false
        usuarioActual = ""
        iconoSesion.textContent = "🔴 Sesion no iniciada"
    }
}


function agregarRuta(){
    if(sesionOk && ruta.value && hora.value && experiencia.value){
        rutas.push({
            usuario: usuarioActual,
            ruta: ruta.value,
            hora: Number(hora.value),
            experiencia: experiencia.value
        })
        ruta.value = ""
        hora.value = ""
        experiencia.value = ""
        articulo.innerHTML = ""

        for(let i = 0; i < rutas.length; i++){
            const article = document.createElement('article')
            article.innerHTML = `
            <p>Usuario👤 : ${rutas[i].usuario} </p>
            <p>
                Ruta🏔️ : ${rutas[i].ruta}
                Horas⏱️ : ${rutas[i].hora}
            </p>
            <p>Experiencia📝 : ${rutas[i].experiencia}</p>`
            articulo.appendChild(article)
        }
    }
    else if(sesionOk){
        confirmacionInicio.textContent = "Rellena todos los campos"
    }
    else{
        confirmacionInicio.textContent = "Inicie sesion antes de agregar rutas"
    }   
}


