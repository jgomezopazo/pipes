import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Jorge";
  arreglo:any[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI; 
  a = 0.268;
  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    direccion: {
      calle: "Avenida Primera",
      casa: 19
    }
  }

  promesa = new Promise( (resolve, reject) => {
    setTimeout( ()=>resolve("Llegó la data"), 4000 );
  } );

  fecha = new Date();

  nombre2 = "jorGe gomeZ";

  video = ""; //reemplazar por el id del video

  activar:boolean = true;

}
