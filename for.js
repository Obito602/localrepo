// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(i=0; i<marks.length; i++){
//     sum+=marks[i];
// }
// console.log(sum);
// for(let val of marks){
//     sum+=val;
// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log(`avg marks of the class= ${avg}`)
let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let off=val/10;
//     items[i]=items[i]-off;
//     console.log(`value after offer= ${items[i]}`);
//     i++
// }
for (let i=0; i<items.length; i++){
    let offer =items[i]/10;

items[i]+=offer

}
console.log(items);