const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;

console.log(producto);

//Propiedades del objeto
console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));

//For in
for (let propiedad in producto) {
  console.log(producto[propiedad]);
}
