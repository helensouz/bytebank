import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-novatransferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss']
})
export class NovatransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12;
  destino: number = 12;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
  }

  limparCampos(){ //ao valor ser digitado, ira zerar o formulario
    this.valor = 0;
    this.destino = 0;
  }


  constructor() {  }
  

  ngOnInit(): void {
  }

}
