// class Employee {
//     private _name: string;

//     // Multiple Constructors not Allowed 
//     constructor(name = "NA") {
//         this._name = name;
//     }

//     public getName(): string {
//         return this._name;
//     }

//     public setName(name: string){
//         this._name = name;
//     }

// Do not create Lambda as class member, will increase memory usage
//     public setName = (name: string) => {
//         this._name = name;
//     }
// }

// var e1 = new Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// --------------------------- Properties

// class Employee {
//     private _name: string;

//     // Multiple Constructors not Allowed 
//     constructor(name = "NA") {
//         this._name = name;
//     }

//     public get Name(): string {
//         return this._name;
//     }

//     public set Name(name: string) {
//         this._name = name;
//     }
// }

// var e1 = new Employee("Manish");
// console.log(e1.Name);
// e1.Name = "Abhijeet";
// console.log(e1.Name);

// ----------------------- Parameter Members

// class Employee {
//     // private _name: string;

//     // constructor(name = "NA") {
//     //     this._name = name;
//     // }

//     constructor(private _name: string, private _age = 0) { }

//     public getName(): string {
//         return this._name;
//     }

//     public setName(name: string) {
//         this._name = name;
//     }

//     public get Age(): number {
//         return this._age;
//     }
// }

// var e1 = new Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// --------------------------------------------- Static 

// class BackAccount {
//     constructor(private bankName: string) { }

//     get BankName(): string {
//         return this.bankName;
//     }
// }

// var a1 = new BackAccount("ICICI");
// console.log("Account 1");
// console.log("Bank Name: ", a1.BankName);

// var a2 = new BackAccount("ICICI");
// console.log("Account 2");
// console.log("Bank Name: ", a2.BankName);

// ------------------------------------- Static
// class BackAccount {
//     private static bankName: string;

//     get BankName(): string {
//         return BackAccount.bankName;
//     }

//     static set BankName(bankName: string) {
//         // Code to Validate
//         BackAccount.bankName = bankName;
//     }
// }

// // BackAccount.setBankName("ICICI");
// BackAccount.BankName = "ICICI";

// var a1 = new BackAccount();
// console.log("Account 1");
// console.log("Bank Name: ", a1.BankName);

// var a2 = new BackAccount();
// console.log("Account 2");
// console.log("Bank Name: ", a2.BankName);

// ----------------------------------------- Readonly Members

class BackAccount {
    private static bankName: string;

    constructor(private readonly _accNumber: number) { }

    get BankName(): string {
        return BackAccount.bankName;
    }

    get AccountNumber(): number {
        // this._accNumber = 100;
        return this._accNumber;
    }

    static set BankName(bankName: string) {
        BackAccount.bankName = bankName;
    }
}

BackAccount.BankName = "ICICI";

var a1 = new BackAccount(1);
console.log("Account 1");
console.log("Account Number: ", a1.AccountNumber);
console.log("Bank Name: ", a1.BankName);

var a2 = new BackAccount(2);
console.log("Account 2");
console.log("Account Number: ", a2.AccountNumber);
console.log("Bank Name: ", a2.BankName);