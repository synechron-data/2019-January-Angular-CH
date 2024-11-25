// var arr1: number[];
// var arr2: Array<number>;
// var numArr = [10, 20, 30, 40, 50];
// // var dataArr = [10, "ABC", true];
// var dataArr:(number|string|boolean)[] = [10, "ABC", true];
// dataArr = [10, 20, 30, 50];
var numArr = [10, 20, 30, 40, 50];
// for (let i = 0; i < numArr.length; i++) {
//     // console.log("numArr[" + i + "]" + " ---------------- " + numArr[i]);
//     console.log(`numArr[${i}] ----------- ${numArr[i]}`);
// }
// for (const key in numArr) {
//     console.log(`numArr[${key}] ----------- ${numArr[key]}`);
// }
// for (const item of numArr) {
//     console.log(item);
// }
var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];
// employees.forEach((value) => {
//     console.log(value.name);
// })
var employee = employees.find(function (emp) { return emp.id == 3; });
console.log(employee);
