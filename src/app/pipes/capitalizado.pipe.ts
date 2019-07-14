import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string): any {
        
        let arregloNombres:string[] = value.split( " " );
        let palabraCapitalizada: string = "";

        for(let i=0; i < arregloNombres.length; i++) {
            let corregido:string = arregloNombres[i].substring(0,1).toUpperCase() + arregloNombres[i].substring(1, arregloNombres[i].length).toLowerCase();
            palabraCapitalizada = palabraCapitalizada + corregido + " ";
        }
        console.log(palabraCapitalizada);

        return palabraCapitalizada.trim();
    }
}