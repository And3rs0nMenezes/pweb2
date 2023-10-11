// Crie um programa que calcule o fatorial de um número inserido pelo usuário usando um
// loop for.
const num = parseInt(prompt('Insira um número:'))
let fat = 1
for (let i = 1; i <= num; i++) {
    fat *= i
}
alert(`A fatorial de ${num} é ${fat}`)