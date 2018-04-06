import { Component, OnInit } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {Observable} from "rxjs/Observable";
import { NotificacaoService } from '../notificacao.service';


@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css'], 
  providers: [NotificacaoService]
})
export class AulasComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = "BK_ccvC7iqF4PMti1PHruOLxqWta0OX4LZjCFG_QMq2_3jk3Vj_AH3VmZWMYjyELdp2n8RXj92BgqMTixd5ToxM";
    sub: PushSubscription;

  constructor( private swPush: SwPush, private api: NotificacaoService) { }

  ngOnInit() {
  }
  inscricaoNotificacao() {
    console.log('inscricaoNotificacao');
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub => {
            this.sub = sub;
            console.log("Cadastro Notificacao: ", sub);
            this.api.adicionaCliente(sub).subscribe(
                () => console.log('Inscrito no servidor.'),
                err =>  console.log('Erro no cadastro, motivo: ', err)
            );

        })
        .catch(err => console.error("Nao pode se inscrever", err));

    }

  enviarNotificacao(){
    console.log("Enviando notificacoes ...");

    this.api.enviaMensagem().subscribe();
  }
}
