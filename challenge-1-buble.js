/**
 * @param {*} array array of integers
 */
const bubleSort = (array) => {
    console.log("Original:", array0);
  const arraySort = array;
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    /**
     * Inicia un indice más adelante porque los anteriores
     * ya fueron comparados y ordenados
     */
    for (let j = i + 1; j < length; j++) {
      if (arraySort[j] < arraySort[i]) {
        const aux = arraySort[i];
        arraySort[i] = arraySort[j];
        arraySort[j] = aux;
      }
    }
  }
  console.log("Ordenado:", arraySort);
  return arraySort;
};

bubleSort([1, 5, 8, 3, 9, 3, 7, 2, 20, 10, 4]);
bubleSort([1, 5, 8, 3, 9, 3, 7, 2, 10, 15, 20]);
bubleSort([50, 5, 8, 3, 9, 3, 7, 2, 10, 15, 20]);
bubleSort([50, 5, 8, 3, 9, 3, 7, 2, 10, 15, 20, 200, 150, 1, 32, 65, 2]);
