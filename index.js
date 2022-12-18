//Constantes de la APP:

const express = require ('express');
const path = require ('path');
const sockets = require('./sockets');
const app = express();
const server = require('http').Server(app);
const socketio = require ('socket.io')(server);

//Puerto de la APP:
app.set('port', process.env.PORT || 3000);

//Ejecucion de funcion de sockets.js:
require('./sockets')(socketio);

//Archivos estaticos (html y CSS):
app.use(express.static(path.join(__dirname, 'public')));


server.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
})