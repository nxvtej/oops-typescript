interface carDetails {
    companyName: string;
    originCountry: string;
    establishedYear: number;
}

class car {
    companyName: string = ''
    originCountry: string = ''
    establishedYear: number = 0


    constructor(companyName: string, originCountry: string, establishedYear: number) {
        this.companyName = companyName;
        this.originCountry = originCountry;
        this.establishedYear = establishedYear;
    }

    get getCompanyDetails(): carDetails | string {
        // either return as sting or template string

        // return `Company Name: ${this.companyName}, Origin Country: ${this.originCountry}, Established Year: ${this.establishedYear}`;

        return {
            companyName: this.companyName,
            originCountry: this.originCountry,
            establishedYear: this.establishedYear
        }
    }
};


// cant name tesla as it is already defined in class.ts, and class is global scope so cant have similar name
class teslacar extends car {
    modelName: string = '';
    modelPrice: number = 0;

    constructor(companyName: string, originCountry: string, establishedYear: number, modelName: string, modelPrice: number) {
        super(companyName, originCountry, establishedYear);
        this.modelName = modelName;
        this.modelPrice = modelPrice;
    }

    get getModelDetails(): string {
        return `Model Name: ${this.modelName}, Model Price: ${this.modelPrice}`;
    }
}



const userPurchase = new teslacar('Tesla', 'USA', 2003, 'Model S', 80000);
console.log(userPurchase);