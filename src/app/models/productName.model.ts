export class productName{
	

    private _ref : number ;

    private _produitName : string ;
    
    private _categorie : string ;
    
    private _price : number ;

    static nextRef = 0;	


    
    
    constructor( produitName : string , categorie : string , price :number ){



        this._ref= productName.nextRef;
        this._produitName= produitName;
        this._categorie= categorie;
        this._price=price;

	productName.nextRef++;

    
    }
    get ref(): number {

		return this._ref;
	}

	 set ref(value : number) {

		this._ref = value;
	}

    get produitName(): string {

		return this._produitName;
	}

	 set produitName(value : string) {

		this._produitName = value;
	}

    get categorie(): string {

		return this._categorie;
	}

	 set categorie(value : string) {

		this._categorie = value;
	}

get price(): number {

		return this._price;
	}

	 set price(value : number) {

		this._price = value;
	}
    
    

}