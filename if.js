const prompt= require ('prompt-sync')();
let m=prompt("enter number");
if(m<=100 && m>90){
    grade="Ex";
}
else if(m<=90 && m>80){
    grade="a"; }
else if(m<=80 && m>70){
    grade="b"; }
else if(m<=70 && m>60){
    grade="c"; }
else if(m<=60 && m>50){
    grade="d";}
else{
    grade="f";
 }
console.log(grade);