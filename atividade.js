//questão 1
const prompt = require('prompt-sync')();
let myName = "Victoria"
let idade = 20
console.log(`Olá, meu nome é ${myName} e tenho ${idade} anos`)

//questao 2
let nome = prompt("Digite seu nome");
var cidade1 = "Recife";
var cidade2 = "São Paulo";
console.log(`${nome} não é de ${cidade1}, é de ${cidade2}`);

 // questão 3
let num1 = 12
let num2 = 33

const soma = num2 + num2;
const mult= (num1 * num2).toFixed(2);
const div = (num1 / num1).toFixed(3);
const sub = num1 - num2;

console.log(`somando os numeros ${num2} e ${num2} temos o número ${soma}`);
console.log(`multiplicando os numeros ${num1} e ${num2} temos o número ${mult}`);
console.log(`dividindo os numeros ${num1} e ${num1} temos o número ${div}`);
console.log(`subtraindo os numeros ${num1} e ${num2} temos o número ${sub}`);

//questão 4
let base = prompt('Digite o valor da base')
let altura = prompt('Digite o valor da altura')
const area = (base * altura)/2

console.log(`multiplicando os valores e dividindo por 2 temos ${area} como área do triângulo`)

//questao 5
let nota1 = parseInt(prompt("insira a nota 1: "))                        
let nota2 = parseInt(prompt("insira a nota 2: "));
let nota3 = parseInt(prompt("insira a nota 3: "));
const media = ((nota1 + nota2 + nota3)/3).toFixed()

console.log(`o resultado da média é ${media}`)

//questao 6
let produto = parseInt(prompt('Digite o valor do produto: '));
let desconto = 0.15;

const valorDesc = produto * desconto;
const valorFinal = produto - valorDesc

console.log(`O valor do produto com desconto será de ${valorFinal}`);

//questao 7
const salario = prompt('Me diga o valor do seu salário: ');
let IR = 0;
if (salario <= 2259.21){
    console.log(`Você está isento de impostos`);
}
else if (salario > 2260.00 &&salario < 2830.00){
    IR = (salario*0.075)
    console.log(`Você deve ${IR} de imposto`)
}
else if (salario > 2831.00 &&salario < 3752.00){
    IR = (salario*0.15)
    console.log(`Você deve ${IR} de imposto`)
}
else if (salario > 3753.00 &&salario < 4665.00){
    IR = (salario*0.225)
    console.log(`Você deve ${IR} de imposto`)
}
else if (salario => 4666.00){
    IR = (salario*0.275)
    console.log(`Você deve ${IR} de imposto`)
}

//questao 8
const valor = prompt('Me diga um valor em reais: ');
const dolar = 5.50

const conver = valor * dolar
console.log(`O valor informado em dólares é de ${conver}`);

//questao 9
let grauC = parseInt(prompt('Me diga os Graus Celsius da sua cidade: '))
const Faire = (grauC * 9/5) + 32.

console.log(`O valor convertido em Fahrenheit é ${Faire}`);

//questao 10
let peso = prompt('Me diga seu peso em KG: ');
let alt = prompt('Me diga sua altura: ');
const IMC = (peso / (alt * alt)).toFixed(2);

console.log(`O valor do seu IMC é de ${IMC}`)


