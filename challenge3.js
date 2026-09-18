const prompt = require('prompt-sync')();
let years = Number(prompt("enter your  years : "))
console.log("1 : mois 2 : jours 3 : Heures 4 : Minutes 5 : Secondes")
let choice = Number(prompt("enter your choice "))
switch (choice) {
    case 1:
        console.log("we change now years to mois", 12 * years)
        break;
    case 2:
        console.log("we change now years to jours", 365 * years)
        break;
    case 3:
        console.log("we change now years to heures ", 365 * 24 * years)
        break;
    case 4:
        console.log("we change now years to minutes ", 365 * 24 * 60 * years)
        break;
    case 5:
        console.log("we change now years to seconds ", 365 * 24 * 60 * 60 * years)
        break;
    default:
        console.log("not valid")
        break;
}

