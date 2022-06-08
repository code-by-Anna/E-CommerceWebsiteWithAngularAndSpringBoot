var CustomerOne = /** @class */ (function () {
    // constructor
    function CustomerOne(first, last) {
        this.fName = first;
        this.lName = last;
    }
    CustomerOne.prototype.getFName = function () {
        return this.fName;
    };
    CustomerOne.prototype.setFName = function (FName) {
        this.fName = FName;
    };
    CustomerOne.prototype.getLName = function () {
        return this.lName;
    };
    CustomerOne.prototype.setLName = function (LName) {
        this.lName = LName;
    };
    return CustomerOne;
}());
// create an instance of the class
var myCustomerOne = new CustomerOne("Anna", "The Great");
console.log(myCustomerOne.getFName());
console.log(myCustomerOne.getLName());
myCustomerOne.setFName("Mary");
myCustomerOne.setLName("The Queen");
console.log(" ");
console.log(myCustomerOne.getFName());
console.log(myCustomerOne.getLName());
