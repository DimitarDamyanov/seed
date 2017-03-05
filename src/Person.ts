export class Person {
    private _name: string;
    private _age: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}  

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}
    
	public get age(): number {
		return this._age;
	}

	public set age(value: number) {
		this._age = value;
	}

    toString = () =>{
        return ["name: ", this._name, "age: ", this._age];
    }
    
}