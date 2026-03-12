// Object literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); // this se refiere al propio objeto
  },
};

console.log(Object.keys(producto)); //devuelve un array con las llaves del objeto

console.log(Object.values(producto)); //devuelve un array con los valores del objeto

console.log(Object.entries(producto)); //devuelve un array con los valores y las llaves

//For in
for (let propiedad in producto) {
  console.log(producto[propiedad]);
}
