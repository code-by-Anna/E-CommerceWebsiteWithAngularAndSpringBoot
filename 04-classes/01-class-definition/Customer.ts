class CustomerOne {

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

    let myCustomerOne = new CustomerOne("Anna", "The Great");

    console.log(myCustomerOne.getFName());
    console.log(myCustomerOne.getLName());

    myCustomerOne.setFName("Mary");
    myCustomerOne.setLName("The Queen");

    console.log(" ");
    console.log(myCustomerOne.getFName());
    console.log(myCustomerOne.getLName());

