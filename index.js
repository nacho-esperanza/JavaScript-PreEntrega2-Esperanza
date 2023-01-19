
class Producto {
    constructor(id, nombre, precio, dispo) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.dispo = parseFloat(dispo);
    }
}

const stockProductos = [];
stockProductos.push(new Producto(1, "Remera", "5000", "15"));
stockProductos.push(new Producto(2, "Pantalon", "8000", "10"));
stockProductos.push(new Producto(3, "Camisa", "6500", "13"));
stockProductos.push(new Producto(4, "Medias", "2500", "30"));

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

function seleccionProducto(){
    id = prompt(`Seleccione un numero para elegir uno de nuestros  ${productos.length} productos para poder comprarla: 
    ${productos}`);

    prodElegido = stockProductos[id -1];

    if (id > 0 && id <= productos.length){
        compra = prodElegido.nombre;
        precio = prodElegido.precio;
    }    
}

seleccionProducto();

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


function carrito(){
    alert(compra + unidades + precio + total);
    console.log('CARRITO: '); 
    console.log('Producto: ' + compra);
    console.log('Unidades: ' + unidades);
    console.log('Precio: ' + precio );
    console.log('Total: ' + total);
    console.log(`Proximamente un carrito mejorado en GodSize!`)
}

carrito();