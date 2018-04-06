import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class NotificacaoService {

  constructor( private http: HttpClient) { }
  adicionaCliente(sub: any){
      return this.http.post('https://pwa-final-fronendinfnet.c9users.io:8081/api/notificacoes', sub)
  }
  enviaMensagem(){
      return this.http.post('https://pwa-final-fronendinfnet.c9users.io:8081/api/newsletter', null);
  }

}
