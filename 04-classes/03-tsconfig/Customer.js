var CustomerFour = /** @class */ (function () {
    // constructor
    function CustomerFour(_fName, _lName) {
        this._fName = _fName;
        this._lName = _lName;
        // no need for the internal assignment, we use the parameter properties
    }
    Object.defineProperty(CustomerFour.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (FName) {
            this._fName = FName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFour.prototype, "lName", {
        get: function () {
            return this._lName;
        },
        set: function (LName) {
            this._lName = LName;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerFour;
}());
// create an instance of the class
var CustomerF = new CustomerFour("Anna", "The Great");
console.log(CustomerF.fName);
console.log(CustomerF.lName);
