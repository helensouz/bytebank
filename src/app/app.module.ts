import { AppRoutingModule } from './app-routing.module';
import { NovatransferenciaComponent } from './novatransferencia/novatransferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgIf, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovatransferenciaComponent,
    ExtratoComponent, 
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}, // muda idioma angular para pt
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' } // muda valor da moede para br
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
