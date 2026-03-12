const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1Kg",
      medidas: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

// Destructuring
const {
  nombre,
  informacion: {
    fabricacion, // no crea la variable de informacion, esta creando la variable de fabricacion
    fabricacion: { pais }, // aqui esta accediendo a la propiedad pais
  },
} = producto;

console.log(nombre);
console.log(fabricacion);
console.log(pais);
