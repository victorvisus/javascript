const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

//como accedo a las propiedades del objeto
console.log("Primera forma de acceder a las propiedades: ");
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//segunda forma
console.log("Segunda forma de acceder a las propiedades: ");
console.log(producto["nombre"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

//Tercera forma
console.log("Tercera forma de acceder a las propiedades: ");
const propiedad = "precio";
console.log(producto[propiedad]);
