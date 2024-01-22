export function patch(url) {
    console.log("estoy intentando añadir")
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            "edad" : 27
        }),
        headers: {
            'Content-type': 'application/json; charset=UFT-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => console.error("Error!!!:" + error))
}

//AGREGA A LO QUE YA ESTA