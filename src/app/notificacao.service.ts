import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class NotificacaoService {

  urlApi = 'https://pwa-final-fronendinfnet.c9users.io:8081/api/';
  constructor( private http: HttpClient) { }
  adicionaCliente(sub: any){
      return this.http.post(this.urlApi + 'notificacoes', sub)
  }
  enviaMensagem(){
      return this.http.post(this.urlApi + 'envianotificacao', null);
  }

}
