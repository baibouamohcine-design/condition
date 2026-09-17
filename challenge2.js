const prompt = require('prompt-sync')();
const lettre = prompt ("Entré a caractère").toLowerCase();
 switch(lettre){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
    console.log("ce charachtére est : " , lettre , "est une voyelle. ")
    break;
    default:
    console.log("ce charachtére est : " , lettre , "est n'pas voyelle. ")
};
