var BackAccount = (function () {
    function BackAccount(_accNumber) {
        this._accNumber = _accNumber;
    }
    Object.defineProperty(BackAccount.prototype, "BankName", {
        get: function () {
            return BackAccount.bankName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackAccount.prototype, "AccountNumber", {
        get: function () {
            return this._accNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackAccount, "BankName", {
        set: function (bankName) {
            BackAccount.bankName = bankName;
        },
        enumerable: true,
        configurable: true
    });
    return BackAccount;
}());
BackAccount.BankName = "ICICI";
var a1 = new BackAccount(1);
console.log("Account 1");
console.log("Account Number: ", a1.AccountNumber);
console.log("Bank Name: ", a1.BankName);
var a2 = new BackAccount(2);
console.log("Account 2");
console.log("Account Number: ", a2.AccountNumber);
console.log("Bank Name: ", a2.BankName);
