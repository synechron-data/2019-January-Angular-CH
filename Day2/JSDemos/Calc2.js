// var dev1;

// (function (ns) {

//     function sub(x, y) {
//         return x + y;
//     }

//     ns.sub = sub;

// })(dev1 = dev1 || {});


var dev1 = (function () {

    function sub(x, y) {
        return x - y;
    }

    return {
        sub: sub
        };
})();