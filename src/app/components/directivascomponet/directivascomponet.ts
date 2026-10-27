import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    templateUrl: './directivascomponent.html',
    standalone: false

})

export class DirectivasComponent implements OnInit {
    //declaramos un array de Deportes (string)
    deportes: string[] 

    constructor() { 
        //asignamos valores a cada deportes del array
        this.deportes = ["Basquetbol","Futbol", "Jabalina","Tenis", "Natacion", ""]

    }

    ngOnInit() { }
}

