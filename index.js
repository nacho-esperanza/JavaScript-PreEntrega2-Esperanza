/*const stockProductos = [
    { id: 1, nombre: "Remera", precio: 5000, dispo: 15 },
    { id: 2, nombre: "Pantalon", precio: 8000, dispo: 10 },
    { id: 3, nombre: "Camisa", precio: 6500, dispo: 13 },
    { id: 4, nombre: "Medias", precio: 2500, dispo: 30},
    { id: 5, nombre: "Perfume textil", precio: 2000, dispo: 7},
];


let carrito = []

let nombre = prompt("Ingrese su nombre:");
alert("Hola " + nombre + " bienvenido a nuestra tienda GodSize!");
alert("Estos son nuestros productos disponibles: ");

let productos = stockProductos.map(
    (productos) => productos.id + ". " + productos.nombre + " " + productos.precio + "$"
    );
    alert(productos.join(" - "))


let producto = prompt("Agrega las prendas que deseas a tu carrito escribiendo el numero de producto: (para terminar escriba 0) ")
let idSeleccion = stockProductos
    .map(producto => productos.id)
    .indexOf(producto);
alert(idSeleccion);
let preciocarrito = 0
*/

class Producto {
    constructor(id, nombre, precio, dispo) {
        this.id = parseFloat(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.dispo = parseFloat(dispo);
    }
}

const stockProductos = [];
stockProductos.push(new Producto("1", "Remera", "5000", "15"));
stockProductos.push(new Producto("2", "Pantalon", "8000", "10"));
stockProductos.push(new Producto("3", "Camisa", "6500", "13"));
stockProductos.push(new Producto("4", "Medias", "2500", "30"));

let nombre = prompt("Ingrese su nombre:");
alert("Hola " + nombre + " bienvenido a nuestra tienda GodSize!");
alert("Estos son nuestros productos disponibles: ");


let productos = stockProductos.map(
    (productos) =>  productos.id + ". " + productos.nombre + " " + "$" + productos.precio
    );
    alert(productos.join(" - "));

let id = 0;
let prodElegido = 0;
let compra = "" ;
let precio = 0;

let carritos = [];

function seleccionProducto(){
    id = Number(prompt(`Indicame cual de nuestros ${productos.length} productos estas interesado 
    ${productos}`));

    prodElegido = productos[id -1];

    if (id > 0 && id <= productos.length){
        compra = prodElegido.nombre;
        precio = prodElegido.precio;

        carritos.push({compra, precio})
        alert(carritos);
    }    
}

seleccionProducto();

// repetir operacion para que seleccione un valor valido o salir
if(id <= 0 || id > productos.length || id === "0"){
    alert(`El valor ingresado no es valido intente un numero del 1 al ${productos.length} o escriba 0 para salir`);
    seleccionProducto();
}

let unidades = 0;
let total = 0;

function cantidadDeUnidades () {
    unidades = Number(prompt(`¿Cuantas unidades de esta prenda quieres comprar?`));
    
    total = unidades * precio;
}
cantidadDeUnidades ()

// resumen de compra o boleta
function carrito(){
    console.log('CARRITO: '); 
    console.log('Producto: ' + compra);
    console.log('Unidades: ' + unidades);
    console.log('Precio: ' + precio );
    console.log('Total: ' + total);
    console.log(`Gracias por comprar en GodSize!`)
}

carrito();