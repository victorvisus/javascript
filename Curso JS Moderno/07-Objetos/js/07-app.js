const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Las propiedades de los objetos se pueden modificar, aunque sean constantes
producto.disponible = false;
console.log(producto);

delete producto.precio;
console.log(producto);
