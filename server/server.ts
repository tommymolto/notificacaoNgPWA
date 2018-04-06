
import * as express from 'express';
import {Application} from "express";
import {readAllLessons} from "./read-all-lessons.route";
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNewsletter} from "./send-newsletter.route";
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"BK_ccvC7iqF4PMti1PHruOLxqWta0OX4LZjCFG_QMq2_3jk3Vj_AH3VmZWMYjyELdp2n8RXj92BgqMTixd5ToxM",
"privateKey":"bJS6fwQbgKvJJJZ6UbgcYzuNBcDWrumWOu9dVW6a2qI"
    
};


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);




const app: Application = express();


app.use(bodyParser.json());


// REST API
app.route('/api/aulas')
    .get(readAllLessons); 

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);



// launch an HTTP Server
const httpServer = app.listen(8081, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});









