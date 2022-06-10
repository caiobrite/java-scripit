// Funções
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

let x = addNums(4, 5); // Chamada da função addNums
console.log(x);

let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}

//Arrow functions
const hello = ()  => {
    return 'Olá Arrow Function!';
};

console.log(hello); // Retorna o objeto função
console.log(hello()); // Executa a função e imprime a string no return
 const addNums2 = (num1 = 1, num2 = 1) => {
     return num1 + num2;
 };

 let soma = addNums2(5, 10);
 console.log(soma);

 // Eventos
 const boasVindas = () => {
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
 };

 const eventClique = () => {
     console.log('Você clicou no botão');
 };

 const mouseEmCima = () => {
     console.log('Mouse está em cima do título');
 };