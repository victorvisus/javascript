const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
//Antigua forma de extraer
//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring
// const { nombre } = producto;
//const { precio } = producto;
//console.log(nombre);
//console.log(precio);

const { nombre, precio, disponible } = producto;
console.log(nombre, precio, disponible);
