import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventoscomponent.html',
    standalone: false

})

export class EventosComponent implements OnInit {
    //declaramos una variable para el mensaje
    mensaje: string;

    constructor() { 
        //le damos un valor al mensaje
        this.mensaje = "Hoy es Martes!!!";
        console.log("Soy el constructor")
    }


    //debemos crear un metodo para cambiar el mensaje
    //al pulsar el boton
    cambiarMensaje(): void  {
        //cambiamos el mensaje por otro
        this.mensaje = "Mañana es Miercoles!!!";
    }

    ngOnInit() { 
        console.log("Soy el ngOnInit")
    }
    ngDoCheck() { 
        console.log("Soy el Do Check")
    }
    
}


