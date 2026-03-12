const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
const resultado2 = {
  ...producto, // los 3 puntos quiere decir que copie el objeto producto
  ...medidas, // los 3 puntos quiere decir que copie el objeto medidas
};
console.log(resultado2);
