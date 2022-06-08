export class CustomerFive {

	private _fName: string;
	private _lName: string;

	// constructor
	
		constructor(first: string, last: string) {
		this._fName = first;
		this._lName = last;
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


