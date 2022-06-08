class Customer {

	private fName: string;
	private lName: string;

	// constructor
	
		constructor(first: string, last: string) {
		this.fName = first;
		this.lName = last;
		}

        public getFName() : string {
            return this.fName;
        }

        public setFName(FName : string) : void {
            this.fName = FName;
        }

        public getLName() : string {
            return this.lName;
        }

        public setLName(LName : string) : void {
            this.lName = LName;
        }


	}

    // create an instance of the class

    let myCustomer = new Customer("Anna", "The Great");

    console.log(myCustomer.getFName());
    console.log(myCustomer.getLName());

    myCustomer.setFName("Mary");
    myCustomer.setLName("The Queen");

    console.log(" ");
    console.log(myCustomer.getFName());
    console.log(myCustomer.getLName());

