/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

const number1 = 10
const number2 = 20

let sum = number1 + number2
let subst = number2 - number1
let mult = number1 * number2
let div = number2 / number1
console.log(sum, subst, mult, div)

let equal = number1 === number2
let notEqual = number1 !== number2
let higher = number1 > number2
let less = number1 < number2
let higherEqual = number1 >= number2
console.log(equal, notEqual, higher, less, higherEqual)

if (number1 > number2) {
  console.log(number1)
} else {
  console.log(number2)
}

// Dificultad extra...

for(let i = 10; i <= 55; i++){
    if(i % 2 == 0 && i !== 16 && i % 3 == 0)
      console.log(i)
}
