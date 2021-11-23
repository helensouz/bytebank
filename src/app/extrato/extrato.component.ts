import { Component, Input, OnInit, Output } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { TransferenciaService } from '../service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias //lista os valores que foram passados
      
    })
  }

}
