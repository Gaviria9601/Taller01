import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";
import { NoTrepa } from "./NoTrepa";
import { Trepa } from "./Trepa";

export class Gato extends Animal implements Mamifero{
    
    pelo: string;
    crecerPelo(): string {
        return "Gato Crece Pelo";
    }
    
    private _nombre: string;
    
    constructor(nombre:string,edad:number,raza:string){
        super(edad,raza,new Trepa());
        this._nombre = nombre;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get raza(): string {
        return this._raza;
    }
    public set raza(value: string) {
        this._raza = value;
    }

    public maullar(parametro:string):string {
        return parametro + " meow!";
    }

    
}
