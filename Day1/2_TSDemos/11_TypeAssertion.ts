// var data = "23.5asdasd";

// var r1 = parseInt(data) + 10;
// console.log(r1);

// var r2 = parseFloat(data) + 10;
// console.log(r2);

// var r3 = Number(data) + 10;
// console.log(r3);

let myData: any = "This is just for fun..";

let l1 = myData.length;
let l2 = (<string>myData).length;
let l3 = (myData as string).length;

console.log(l1);
console.log(l2);
console.log(l3);

let l4 = (myData as number).toFixed();
