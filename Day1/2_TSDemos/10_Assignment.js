// function Reverse(str: string): Array<string>;
// function Reverse(arr: Array<string>): Array<string>;
function Reverse(strOrArr) {
    if (typeof strOrArr == "string")
        return strOrArr.split("").reverse();
    else
        return strOrArr.slice().reverse();
}
;
console.log(Reverse("Manish"));
console.log(Reverse(["Manish", "ABC", "PQR"]));
