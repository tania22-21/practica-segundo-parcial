const zapato = {
marca:"converse",
modelo:"tenis",
color:"negro",
fabricacion:{
    pais:"Mexico",
    fecha:"1 de marzo 2023"
},
material:{
    suela:"plastico"
}
}

function mostrar() {
    const mensaje = `Venta de zapatos ${zapato.marca} color ${zapato.color} de suela de  ${zapato.material.suela}.`;
    document.getElementById("message-container").innerHTML = `<div class="message">${mensaje}</div>`;
}

// Llamada a la función para mostrar el celular
mostrar()
