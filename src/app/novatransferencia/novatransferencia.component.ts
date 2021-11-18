import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novatransferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss']
})
export class NovatransferenciaComponent implements OnInit {

  valor: number = 12;
  destino: number = 222;

  transferir(): void{
    console.log('solicitada nova transferencia')
    console.log('valor: ', this.valor);
    console.log('destino:', this.destino)
  }

  constructor() {  }
  

  ngOnInit(): void {
  }

}
