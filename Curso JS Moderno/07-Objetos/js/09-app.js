"use strict"; //no permite malas practicas en este documento

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

//Una vez "habilitado" el "use strict" se habilitan ciertos metodos de los objetos:
Object.seal(producto); // No permite ni agregar nuevas propiedades, ni eliminar propiedades, pero si modificar propiedades
producto.imagen = "imagen2.jpg";
//delete producto.imagen;

console.log("Producto sellado?: " + Object.isSealed(producto)); // nos dice si esta sellado
console.log(producto);
