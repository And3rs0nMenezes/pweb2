// Crie um programa que calcule o IMC (Índice de Massa Corporal) do usuário. Peça ao
// usuário para inserir sua altura e peso usando prompts e calcule o IMC usando a fórmula
// IMC = peso / (altura * altura). Em seguida, exiba uma mensagem com o resultado.
let altura = parseFloat(prompt('Sua altura: '))
let peso = parseFloat(prompt('Seu peso: '))
imc = peso / (altura * altura)
console.log(`Seu IMC é ${imc}`)