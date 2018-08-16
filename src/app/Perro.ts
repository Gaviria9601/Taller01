import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";
import { Trepa } from "./Trepa";
import { NoTrepa } from "./NoTrepa";

export function ladrarFuncion(parametro:string):string{
    return parametro;
}

export enum Numero {
    Zero,Uno
}

export const DERECHA=Numero.Uno;
export const IZQUIERDA=Numero.Zero;

export class Perro extends Animal implements Mamifero{

  private _nombre:string;
    
    constructor(nombre:string,edad:number,raza:string){
        super(edad,raza,new NoTrepa());
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

    public ladrar(parametro:string):string{
       return parametro + " woof!";
    }

    public moverse(opcion:Numero):string{
        switch (opcion) {
        case Numero.Zero: 
        return "Mover Izquierda";
        case Numero.Uno:
        return "Mover Derecha";
        default:
        return "No realizo Movimiento";
    }
    }

    pelo:string;
    crecerPelo():string{
        return "Perro Crece Pelo";
    }

}
