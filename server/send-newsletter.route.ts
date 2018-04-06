import {USER_SUBSCRIPTIONS} from "./in-memory-db";

const webpush = require('web-push');


export function sendNewsletter(req, res) {

    console.log('Inscricoes', USER_SUBSCRIPTIONS.length);

    // cadastro de nova notificacao
    const notificationPayload = {
        "notification": {
            "title": "Atualizacao no Push em "+ Date.now() +"!",
            "body": "Push funcionando!",
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };


    Promise.all(USER_SUBSCRIPTIONS.map(sub => webpush.sendNotification(
        sub, JSON.stringify(notificationPayload) )))
        .then(() => res.status(200).json({message: 'Notificacoes enviadas.'}))
        .catch(err => {
            console.error("Erro de envio de notificacoes: ", err);
            res.sendStatus(500);
        });






}

