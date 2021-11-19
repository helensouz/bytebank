import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any [] = [];

  transferir($event: any) {
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia); //ira adicionar o valor que o user digitar
  }
}
