// EXERCICIO 03 - ARRAYS

const arrayNumeros = [2, 100, 123, 093, 1]
const arrayStrings = ['marcela', 'alex', 'carol']
const arrayDiversos = [5, 'fome', true, false, 0]

const arrayNumerosCopia1 = arrayNumeros.slice()
const arrayStringsCopia2 = arrayStrings.slice()
const arrayDiversosCopia3 = arrayDiversos.slice()

// a)
arrayNumerosCopia1.unshift(-1)
console.log(arrayNumeros)
console.log(arrayNumerosCopia1)

// b)
arrayStringsCopia2.pop()
console.log(arrayStrings)
console.log(arrayStringsCopia2)

// c)
arrayDiversosCopia3.splice(1,1)
console.log(arrayDiversos)
console.log(arrayDiversosCopia3)