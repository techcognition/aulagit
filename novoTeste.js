const prompt = require("prompt-sync")();
let idadeAnon = Number(prompt("quantos anos voce tem?"));
if (idadeAnon >= 18){
    console.log(`voce é maior de idade`);
}
else {
    console.log(`voce é menor de idade`);
}