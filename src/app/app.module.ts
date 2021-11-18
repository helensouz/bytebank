import { NovatransferenciaComponent } from './novatransferencia/novatransferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NovatransferenciaComponent],
  
  imports: [BrowserModule, FormsModule],

  exports:[NovatransferenciaComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
