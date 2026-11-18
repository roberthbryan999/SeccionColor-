
function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}


function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f697.png",
        moto: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f3cd.png",
        bicicleta: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f6b2.png"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}


