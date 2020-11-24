/**
 *
 * @param {*} array
 * @param {*} number
 */
const linealSearch = (array, number) => {
  for (let i = array.length-1; i >= 0; i--) {
    if (array[i] === number) return i;
  }
  return -1;
};

const arr=[2,10,5,4,8];
console.log('El indice del número 2 es: ', linealSearch(arr, 2));
console.log('El indice del número 5 es: ', linealSearch(arr, 5));
console.log('El indice del número 8 es: ', linealSearch(arr, 8));
console.log('El indice del número 1 es: ', linealSearch(arr, 1));
