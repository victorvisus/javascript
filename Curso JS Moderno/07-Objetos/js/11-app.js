const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); // this se refiere al propio objeto
  },
};
const producto2 = {
  nombre: "Tablet 10 pulgadas",
  precio: 600,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
  },
};
producto.mostrarInfo();
producto2.mostrarInfo();
