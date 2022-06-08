class CustomerFour {
	// constructor
	
		constructor(private _fName: string, private _lName: string) {
		// no need for the internal assignment, we use the parameter properties
		}

        public get fName() : string {
            return this._fName;
        }

        public set fName(FName : string) {
            this._fName = FName;
        }

        public get lName() : string {
            return this._lName;
        }

        public set lName(LName : string) {
            this._lName = LName;
        }
	}

    // create an instance of the class

    let CustomerF = new CustomerFour("Anna", "The Great");

    console.log(CustomerF.fName);
    console.log(CustomerF.lName);


