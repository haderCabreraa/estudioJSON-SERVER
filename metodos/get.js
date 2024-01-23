export function get(url,datos) {
    const cliente = document.querySelector("#usuario");
    const trabajador = document.querySelector("#trabajador");
    const sesion = document.querySelector("#inicioSesion");
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UFT-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            if(json.pass === datos.pass && json.id === datos.id && json.tipoId === "2" ){
                alert("BIENVENIDO TRABAJADOR")
                trabajador.classList.remove('ocultar')
                sesion.classList.add('ocultar')

            }else if(json.pass === datos.pass && json.id === datos.id && json.tipoId === "3" ){
                alert("BIENVENIDO USUARIO")
                trabajador.classList.remove('ocultar')
                sesion.classList.add('ocultar')
            } else {
                alert("datos incorrectos")
                
            }
        } );
}
