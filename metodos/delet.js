export function delet(url) {
    fetch(url, {
        method: 'DELETE',
    
        headers: {
            'Content-type': 'application/json; charset=UFT-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => console.error("Error!!!:" + error))
}

//ELIMINAR POR ID ("EL ID LLEGA DIRECTAMENTE DEL FORMULARIO")