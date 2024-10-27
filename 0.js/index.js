
// ------------ Desafio 4 --------------------
function sumarProductos (precioUnitario, cantidadDeseada) {

    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

const precio = 100;
let cantidad = 5;
let totalCompra = sumarProductos (precio, cantidad);

console.log(`La suma total es $${totalCompra}`)