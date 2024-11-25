// function Reverse(str: string): Array<string>;
// function Reverse(arr: Array<string>): Array<string>;

// function Reverse(strOrArr: any) {
//     if (typeof strOrArr == "string")
//         return strOrArr.split("").reverse();
//     else
//         return strOrArr.slice().reverse();
// };

// console.log(Reverse("Manish"));
// console.log(Reverse(["Manish", "ABC", "PQR"]));

// -------------------------------- Type Guards
// var data: string;

// var data: (string | number);
// data = "Manish";
// data = 10;

function Reverse(str: string): Array<string>;
function Reverse(arr: Array<string>): Array<string>;

function Reverse(strOrArr: (string | string[])) {
    if (typeof strOrArr == "string")
        return strOrArr.split("").reverse();
    else
        return strOrArr.slice().reverse();
};

console.log(Reverse("Manish"));
console.log(Reverse(["Manish", "ABC", "PQR"]));