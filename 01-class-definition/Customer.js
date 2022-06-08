var Customer = /** @class */ (function () {
    // constructor
    function Customer(first, last) {
        this.fName = first;
        this.lName = last;
    }
    Customer.prototype.getFName = function () {
        return this.fName;
    };
    Customer.prototype.setFName = function (FName) {
        this.fName = FName;
    };
    Customer.prototype.getLName = function () {
        return this.lName;
    };
    Customer.prototype.setLName = function (LName) {
        this.lName = LName;
    };
    return Customer;
}());
// create an instance of the class
var myCustomer = new Customer("Anna", "The Great");
console.log(myCustomer.getFName());
console.log(myCustomer.getLName());
myCustomer.setFName("Mary");
myCustomer.setLName("The Queen");
console.log(" ");
console.log(myCustomer.getFName());
console.log(myCustomer.getLName());
