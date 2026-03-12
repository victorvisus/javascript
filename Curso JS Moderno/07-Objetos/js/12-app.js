// Object literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); // this se refiere al propio objeto
  },
};

// Objeto constructor
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
  this.mostrarInfo = function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); // this se refiere al propio objeto
  };
}

const producto2 = new Producto("Monitor 24 pulgadas", 500, true);
console.log(producto2);
producto2.mostrarInfo();

const producto3 = new Producto("Television", 100);
console.log(producto3);
producto3.mostrarInfo();
