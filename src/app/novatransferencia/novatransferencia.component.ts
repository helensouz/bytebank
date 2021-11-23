import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novatransferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss']
})
export class NovatransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12;
  destino: number = 12;

      constructor(private service: TransferenciaService, private router: Router){}
  

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}; //invoca o metodo

    //metodo subscribe
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);//mensagem de sucesso
      this.limparCampos(); // mostra os dados e limpa os campos
      this.router.navigateByUrl('extrato')

    },
    (error) => console.log(error)
);
}

  limparCampos(){ //ao valor ser digitado, ira zerar o formulario
    this.valor = 0;
    this.destino = 0;
  }



  

  ngOnInit(): void {
  }

}
