// Crie uma função chamada "soma" que recebe dois números como argumentos e retorna
// a soma deles. Em seguida, use um prompt para obter dois números do usuário, chame a
// função e exiba o resultado em um alert.

function soma(num1, num2) {
    return num1 + num2;
}
let n1 = parseInt(prompt('Insira o primeiro número: '));
let n2 = parseInt(prompt('Insira o segundo número: '));
alert(soma(n1, n2));