import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-saludo-component',
  standalone: false,
  templateUrl: './form-saludo-component.html',
})
export class FormSaludoComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  mensaje: string = "";
  
  //en el constructor debemos iniciar nuestra variable
  constructor(){
    this.mensaje = "";
  }
  //necesitamos un método para cuando el usuario pulse el boton
  mostrarSaludo(): void{
    //recuperamos el valor de la caja
    let nombre = this.cajanombre.nativeElement.value;
    this.mensaje = "Hola soy miercoles," + nombre;
  }
}

