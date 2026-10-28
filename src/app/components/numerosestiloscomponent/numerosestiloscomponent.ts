import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numerosestilos',
    styleUrls: ['./numerosestiloscomponent.css'],
    templateUrl: './numerosestiloscomponent.html',
    standalone: false
})

export class NumerosEstilosComponent implements OnInit {
    numeros: number [];
    
    constructor() { 
        this.numeros = [1,2,3,4,5,6,7,8];

    
    }

    generarNumero(): void { 
        let random = Math.floor(Math.random() * 100) + 1;
        this.numeros.push (random);


    }
    ngOnInit() { }
}