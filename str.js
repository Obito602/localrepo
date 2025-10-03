// // let str= "apna college";
// // console.log(str[9])
// let spacialString='this is template literal';
// console.log(typeof spacialString);
const prompt= require ('prompt-sync')();
let fullname= prompt("enter full name without space= ");
let username="@"+fullname+fullname.length;
console.log(username);