import { Component } from '@angular/core';
import { Perro, Numero, ladrarFuncion } from './Perro';
import { Gato } from './Gato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller01-Santiago Gaviria Oliveros';

  constructor(){

    console.log ('-------------------Pruebas con el Perro-------------------------');

    let perro = new Perro('Toby',6,'Chichuawa');

    console.log(ladrarFuncion('Ladrar'));
    console.log(perro.ladrar(perro.nombre));
    console.log(perro.crecerPelo());

    
    console.log(perro.moverse(Numero.Zero));
    console.log(perro.moverse(Numero.Uno));

    console.log ('-------------------Pruebas con el Gato-------------------------');

    let gato = new Gato('Mechas',10,'Unica');
    console.log(gato.maullar(gato.nombre));

    console.log(gato.crecerPelo());


  }



}
