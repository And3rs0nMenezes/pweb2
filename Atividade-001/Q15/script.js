// Crie um loop for que exiba a tabuada de multiplicação de um número inserido pelo
// usuário usando prompt
const num= parseInt(prompt('Insira um número: '))
for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}