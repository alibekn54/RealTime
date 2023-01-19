const ws = require('ws');

const wss = new WebSocket.Server({
    port: 5000,

}, () => console.log('server started on 5000'))

wss.on('connection', function connection(ws) {
    ws.on('message', function (message){
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':

        }
    })
})

const message = {
    event: "message/connection",
    id: 1243,
    date: '21.01.2022',
    message: 'Put like'
}