// function mello(){
//     console.log("mello");
// }
// mello()
// setTimeout(function(){
// console.log("hii manu");
// },4000)
// for(let i=1; i<=10;i++){
//     setTimeout(function(){
//         console.log(11-i);
//     },i*2000)
// }
// let arr = [1,-6,-3,8];
// console.log(arr);
// let brr=[];
// for(const ele of arr){
//     // brr.push(ele*ele);
//     brr.push(Math.abs(ele)
//     )
// }
// console.log(brr);
 let arr=[1,9,2,7,4,5,6,2,8];
a=arr.filter((ele)=>{
    if(ele%2==0) return true;
    else return false;
});
arr= arr.filter((ele)=>{
   
     return (ele<7);
});
console.log(a);

console.log(arr);
