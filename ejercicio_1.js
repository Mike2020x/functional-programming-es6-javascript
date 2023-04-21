// 1.utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

// 2.utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

// 3.utilizar el método reduce para sumar todos los elementos
// 21

const arr = [1, 2, 3, 4, 5, 6];

const doble = arr.map((element) => element * 2);
console.log(doble);

const pares = arr.filter((number) => number % 2 === 0);
console.log(pares);

const suma = arr.reduce((acc, prev) => acc + prev);
console.log(suma);
