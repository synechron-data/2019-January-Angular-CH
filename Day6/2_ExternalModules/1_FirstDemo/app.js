const us = require('underscore');

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

for (const e of employees) {
    console.log(e.name);
}

let sorted = us.sortBy(employees, 'name');

console.log("\nAfter Sorting...");

for (const e of sorted) {
    console.log(e.name);
}