import { Trepar } from "./Trepar";
import { Trepa } from "./Trepa";
import { NoTrepa } from "./NoTrepa";

export class Animal{

    protected _edad: number;
    protected _raza: string;

    constructor(edad:number,raza:string,trepar:Trepar){
        this._edad = edad;
        this._raza = raza;
        trepar.treparArbol();
    }
    
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    public get raza(): string {
        return this._raza;
    }
    public set raza(value: string) {
        this._raza = value;
    }


}