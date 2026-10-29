import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-numero-component',
  standalone: false,
  styleUrl: './form-numero-component.css',
  templateUrl: './form-numero-component.html',
})
export class FormNumeroComponent {
  @ViewChild('cajanumero') cajanumero!: ElementRef;

  arraynumeros: number[] = [];
  insertarNumero(): void{
    let numero = parseInt(this.cajanumero.nativeElement.value);
    this.arraynumeros.push(numero);
    
  }
  constructor (){
    this.arraynumeros = [];
  }
}