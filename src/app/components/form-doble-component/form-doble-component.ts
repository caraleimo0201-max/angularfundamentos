import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-doble-component',
  standalone: false,
  styleUrl: './form-doble-component.css',
  templateUrl: './form-doble-component.html',
})
export class FormDobleComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  doble: number;
  
  constructor() {
    this.doble = 0;
  }

  mostramosDoble(): void{
    //en las cajas siempre vienen textos(string)
    //si queremos un numero, necesitamos parseIntoNumber
    let numero = parseInt(this.cajanombre.nativeElement.value);
    this.doble = numero * 2;
  }
}
