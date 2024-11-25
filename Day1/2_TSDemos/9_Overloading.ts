// function Hello(): void;
// function Hello(n: string): void;

// function Hello() {
//     function M1() {
//         console.log("Hello World");
//     }

//     function M2(name: string) {
//         console.log("Hello " + name);
//     }

//         if (arguments.length == 0)
//             M1();
//         else if (arguments.length == 1)
//             M2(arguments[0]);
//         else
//             throw Error("Invalid Arguments");
// };

// -------------------------------------------
function Hello(): void;
function Hello(n: string): void;

function Hello(...args: Array<string>) {
    if (args.length == 0)
        console.log("Hello World");
    else if (args.length == 1)
        console.log("Hello " + args[0]);
    else
        throw Error("Invalid Arguments");
};

Hello();
Hello("Manish");