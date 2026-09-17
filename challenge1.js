const prompt = require('prompt-sync')();
const   a = Number(prompt('Entré a nomber : ' ))
if (a % 2 === 0){
    console.log("le nomber  ", a , "est pair ")
}else {
    console.log("le nomber  ", a , "est impair ")
};