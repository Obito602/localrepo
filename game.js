
const prompt= require ('prompt-sync')();

let gamenum=10;
let usernum= prompt ("guess the number")
while(usernum==gamenum){
    usernum=prompt("you enterd the wrong num, guess again")
 }
console.log("congratulation , you enterd the right number");