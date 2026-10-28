import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-nombres-array-component',
  standalone: false,
  styleUrl: './formnombres-array-component.css',
  templateUrl: './formnombres-array-component.html',
})
export class FormnombresArrayComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef;

  arraynombres: string[] 

  insertarNombre(): void{
    //recuperamos el nombre de la caja
    let nombre = this.cajanombre.nativeElement.value;
    //añadimos el nombre al array (push)
    this.arraynombres.push(nombre);

  }
  constructor (){
    this.arraynombres = [];
  }
}

