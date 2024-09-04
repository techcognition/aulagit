const prompt = require('prompt-sync')();

let num1 = Number(prompt("digite um numero:"));
let num2 = Number(prompt("digite outro numero:"));

console.log(`a soma é ${num1 + num2}`);
console.log(`a subtraçao é ${num1 - num2}`);
console.log(`a multiplicaçao é ${num1 * num2}`);
console.log(`a divisao é ${num1 / num2}`);