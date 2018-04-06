


import {USER_SUBSCRIPTIONS} from "./in-memory-db";



export function addPushSubscriber(req, res) {

    const sub = req.body;

    console.log('Inscricao Recebida no servidor: ', sub);

    USER_SUBSCRIPTIONS.push(sub);

    res.status(200).json({message: "Inscricao adicionada com sucesso."});
}

