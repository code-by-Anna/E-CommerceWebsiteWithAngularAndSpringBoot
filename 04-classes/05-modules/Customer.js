"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFive = void 0;
var CustomerFive = /** @class */ (function () {
    // constructor
    function CustomerFive(first, last) {
        this._fName = first;
        this._lName = last;
    }
    Object.defineProperty(CustomerFive.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (FName) {
            this._fName = FName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFive.prototype, "lName", {
        get: function () {
            return this._lName;
        },
        set: function (LName) {
            this._lName = LName;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerFive;
}());
exports.CustomerFive = CustomerFive;
