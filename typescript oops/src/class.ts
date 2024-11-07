class carCompany {
    name: string;
    originCountry: string;
    establishedYear: number;

    /*
    // cant just do it like this
    modelName: string;
    modelPrice: number;
*/

    //  either values assign, or ! which tells it will be assignmend for sure
    modelName!: string;
    modelPrice: number = 0


    constructor(name: string, originCountry: string, establishedYear: number) {
        this.name = name;
        this.originCountry = originCountry;
        this.establishedYear = establishedYear;
    }



    // cant do it like this, must have only one agrument
    /*
    set newModel(modelName: string, modelPrice: number) {
        this.modelName = modelName;
        this.modelPrice = modelPrice;
    }*/

    set newModel(modelName: string) {
        this.modelName = modelName;
    }

    set newPrice(modelPrice: number) {
        this.modelPrice = modelPrice;
    }

    get companyDetails() {
        return `Company Name: ${this.name}, Origin Country: ${this.originCountry}, Established Year: ${this.establishedYear}`;
    }
}


const tesla = new carCompany('Tesla', 'USA', 2003);
console.log(typeof tesla);
console.log(tesla)

tesla.newModel = 'Model S';
tesla.newPrice = 80000;

console.log(tesla.companyDetails);