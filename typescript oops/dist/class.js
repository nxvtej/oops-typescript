"use strict";
class carCompany {
    constructor(name, originCountry, establishedYear) {
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
    set newModel(modelName) {
        this.modelName = modelName;
    }
    set newPrice(modelPrice) {
        this.modelPrice = modelPrice;
    }
    get companyDetails() {
        return `Company Name: ${this.name}, Origin Country: ${this.originCountry}, Established Year: ${this.establishedYear}`;
    }
}
const tesla = new carCompany('Tesla', 'USA', 2003);
console.log(typeof tesla);
console.log(tesla);
tesla.newModel = 'Model S';
tesla.newPrice = 80000;
console.log(tesla.companyDetails);
