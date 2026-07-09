let array = []
let ruta = document.getElementById("tu-ruta")
let boton0 = document.getElementById("boton-ruta")
let lista = document.getElementById("lista-de-rutas")

boton0.addEventListener("click", function () {
    array.push(ruta.value)
    ruta.value = ""
    lista.innerHTML = ""

    for(let i = 0; i < array.length; i++){
        let li = document.createElement('li')
        li.textContent = array[i]
        document.getElementById("lista-de-rutas").appendChild(li)
    }    
    
})




