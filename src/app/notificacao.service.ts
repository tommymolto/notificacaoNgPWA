import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class NotificacaoService {

  constructor( private http: HttpClient) { }
  adicionaCliente(sub){
      return this.http.post('/api/notificacoes', sub)
  }
  enviaMensagem(){
      return this.http.post('/api/notificacao', null);
  }

}
