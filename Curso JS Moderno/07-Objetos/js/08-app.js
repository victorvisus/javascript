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
Object.freeze(producto); // No permite modificar las propiedades del objeto ni agregar nuevas propiedades, ni eliminar propiedades
//producto.imagen = "imagen2.jpg";
//delete producto.imagen;

console.log("Producto congelado?: " + Object.isFrozen(producto)); // nos dice si esta congelado
