// Peça ao usuário para inserir uma palavra usando prompt e verifique se a palavra é um
// palíndromo (lê-se da mesma forma de trás para frente) usando if/else.
function InverterString(string) {
    return string.split('').reverse().join('');
}
const palavra = prompt('Insira a palavra: ')
palavra == InverterString(palavra) ? console.log('É palíndromo') : console.log('Não é palíndromo')