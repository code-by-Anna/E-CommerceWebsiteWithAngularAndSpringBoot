var CustomerThree = /** @class */ (function () {
    // constructor
    function CustomerThree(first, last) {
        this._fName = first;
        this._lName = last;
    }
    Object.defineProperty(CustomerThree.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (FName) {
            this._fName = FName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerThree.prototype, "lName", {
        get: function () {
            return this._lName;
        },
        set: function (LName) {
            this._lName = LName;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerThree;
}());
// create an instance of the class
var CustomerTh = new CustomerThree("Anna", "The Great");
console.log(CustomerTh.fName);
console.log(CustomerTh.lName);
