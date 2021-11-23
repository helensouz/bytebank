import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Transferencia } from '.././model/transferencia.model';


@Injectable({
  providedIn: 'root' //sera existente enquanto a aplicacao estiver ativa
})
export class TransferenciaService { //podemos invocar a instancia da classe atraves do constructor

  private listatransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { //serve para requisicoes http rest(get, post..)
    this.listatransferencia = [];

   }

   get transferencias(){
     return this.listatransferencia;
   }

   todas(): Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url) //retorna lista de transferencia
   }


   adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.listatransferencia.push(transferencia);
   }
  
    private hidratar(transferencia: any){
      transferencia.data = new Date();
  }
}
