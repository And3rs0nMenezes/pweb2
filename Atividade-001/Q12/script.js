// Peça ao usuário para inserir um número usando o prompt e armazene-o em uma
// variável. Use um loop while para verificar se o número é primo ou não e exiba uma
// mensagem correspondente.
const numero = prompt('Insira um número:')
let cont = 1
let divisiveis = 0

while (cont <= numero) {
    if (numero % cont == 0)
        divisiveis++
    cont++
}
if (divisiveis <= 2)
    console.log('É primo')
else
    console.log('Não é primo')