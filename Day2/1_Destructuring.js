var calculator = (function () {
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function mul(x, y) {
        return x * y;
    }
    function div(x, y) {
        return x / y;
    }
    return {
        add: add, sub: sub, mul: mul
    };
})();
var add = calculator.add, sub = calculator.sub;
var arr = [10, 20, 30, 40, 50];
var x = arr[0], y = arr[2];
console.log("Before: ", x, y);
_a = [x, y], y = _a[0], x = _a[1];
console.log("After: ", x, y);
var _a;
