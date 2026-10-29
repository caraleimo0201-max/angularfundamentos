import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoComponent } from './components/segundocomponent/segundocomponent';
import { TercerComponent } from './components/tercercomponent/tercercomponent';
import { EventosComponent } from './components/eventoscomponent/eventoscomponent';
import { DirectivasComponent } from './components/directivascomponet/directivascomponet';
import { NumerosEstilosComponent } from './components/numerosestiloscomponent/numerosestiloscomponent';
import { TestComponent } from './components/test-component/test-component';
import { FormsModule } from '@angular/forms';
import { FormSaludoComponent } from './components/form-saludo-component/form-saludo-component';
import { FormDobleComponent } from './components/form-doble-component/form-doble-component';
import { FormsumarNumerosComponent } from './components/formsumar-numeros-component/formsumar-numeros-component';
import { FormnombresArrayComponent } from './components/formnombres-array-component/formnombres-array-component';
import { FormNumeroComponent } from './components/form-numero-component/form-numero-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    SegundoComponent,
    TercerComponent,
    EventosComponent,
    DirectivasComponent,
    NumerosEstilosComponent,
    TestComponent,
    FormSaludoComponent,
    FormDobleComponent,
    FormsumarNumerosComponent,
    FormnombresArrayComponent,
    FormNumeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
