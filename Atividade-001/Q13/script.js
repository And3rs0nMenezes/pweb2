// Crie um programa que calcule a média de 5 notas inseridas pelo usuário usando um
// loop for.
let soma = 0
for (i = 1; i <= 5; i++) {
    const nota = parseInt(prompt(`Insira a nota ${i}:`))
    soma += nota
}
const media = soma / 5
alert(`A média das notas é: ${media}`)