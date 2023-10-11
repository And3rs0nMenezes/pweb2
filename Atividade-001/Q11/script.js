// Crie uma função chamada "maiorNumero" que recebe três números como argumentos e
// retorna o maior deles. Use prompt para obter três números do usuário, chame a função e
// exiba o resultado em um alert.
function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
let num1 = parseInt(prompt('Primeiro número:'))
let num2 = parseInt(prompt('Segundo número:'))
let num3 = parseInt(prompt('Terceiro número:'))
alert('O maior número é ' + maiorNumero(num1, num2, num3))