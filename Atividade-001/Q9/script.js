// Peça ao usuário para inserir um número usando o prompt e armazene-o em uma
// variável. Verifique se o número é positivo, negativo ou zero e exiba uma mensagem
// correspondente usando if/else.
const num = prompt('Insira um número')
if (num > 0)
    console.log('Positivo')
else if (num < 0)
    console.log('Negativo')
else
    console.log('Zero')