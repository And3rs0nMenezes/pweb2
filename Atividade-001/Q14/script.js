// Peça ao usuário para inserir uma senha usando o prompt. Se a senha for "senha123",
// exiba uma mensagem de acesso permitido. Caso contrário, exiba uma mensagem de
// acesso negado.
const senha = prompt('Insira a senha: ')
senha === 'senha123' ? console.log('Permitido') : console.log('Negado')