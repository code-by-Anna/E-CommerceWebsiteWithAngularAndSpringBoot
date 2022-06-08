var CustomerTwo = /** @class */ (function () {
    // constructor
    function CustomerTwo(first, last) {
        this._fName = first;
        this._lName = last;
    }
    Object.defineProperty(CustomerTwo.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (FName) {
            this._fName = FName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerTwo.prototype, "lName", {
        get: function () {
            return this._lName;
        },
        set: function (LName) {
            this._lName = LName;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerTwo;
}());
// create an instance of the class
var myCustomerTwo = new CustomerTwo("Anna", "The Great");
console.log(myCustomerTwo.fName);
console.log(myCustomerTwo.lName);
