// var dev1;

// (function (ns) {

//     function add(x, y) {
//         return x + y;
//     }

//     ns.add = add;

// })(dev1 = dev1 || {});


var $ = (function () {

    function add(x, y) {
        return x + y;
    }

    return {
        add: add
    };
})();
