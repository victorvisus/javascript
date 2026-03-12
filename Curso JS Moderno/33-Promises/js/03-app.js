//Aqui hemos definido un promise que evalua si hay un descuento
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  if (descuento) {
    resolve('Tenemos descuento');
  } else {
    reject('No tenemos descuento');
  }
});

//utilizacion
/* aplicarDescuento
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
 */
console.log(aplicarDescuento);

//tenemos tres valores posibles
//pending: pendiente
//fulfilled: resuelto
//rejected: rechazado

aplicarDescuento
  .then((resultado) => descuento(resultado))
  .catch((error) => descuento(error));

function descuento(mensaje) {
  console.log(mensaje);
}
