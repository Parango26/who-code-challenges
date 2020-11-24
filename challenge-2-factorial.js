/**
 *
 * @param {*} number Int
 */
const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);

console.log("Factorial de 10: ", factorial(10));
console.log("Factorial de 5: ", factorial(5));
console.log("Factorial de 4: ", factorial(4));
console.log("Factorial de 3: ", factorial(3));
console.log("Factorial de 2: ", factorial(2));
console.log("Factorial de 1: ", factorial(1));
console.log("Factorial de 0: ", factorial(0));
