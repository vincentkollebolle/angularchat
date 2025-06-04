# Chatclient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Chat server

To start a local server, use this script as a template:

```js
//index.js
const port = '3000'
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{
    cors: { origin: '*' },
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});
//io.set('origins', '*:*');
var users = [];

// Quelqu'un rejoint le socket
io.on('connection', function(socket){
    console.log('User is connected');
    // On lui envoie les utilisateurs présents sur le chat
    io.emit('allUsers', users);
    // Il demande à rejoindre le chat avec un pseudo
    socket.on('newUser', function (pseudo){
      if (users.includes(pseudo)){
        pseudo = pseudo + Math.floor(Math.random() * 100) + 1;
      }
      // On stock le pseudo sur la session du serveur
      socket.pseudo = pseudo;
      // On ajoute l'utilisateur à la liste des utilisateurs présents
      users.push(pseudo);
      io.emit('resUser', true);
      // On envoie un message aux autres utilisateurs avec son pseudo
      io.emit('newUser', {pseudo: pseudo, message: '', status: 1});
      // On met à jour la liste des utilisateurs présents pour tous le monde
      io.emit('allUsers', users);
    })
    // Il envoie un message
    socket.on('message', function (message) {
      // On envoie le message aux autres utilisateurs avec son pseudo récupéré dans la session du serveur
      io.emit('message', {pseudo: socket.pseudo, message: message, status: 0});
    });
    // Il se deconnecte mais reste sur la page (socket toujours présent)
    socket.on('logout', function (message) {
        if (users.includes(socket.pseudo)) {
            // On le supprime de la liste des utilisateurs
            users.splice(users.indexOf(socket.pseudo), 1);
            // Si le message est vide, on en met un par défaut
            if ( !message ) { message = 'Kenavo!'; }
            // On envoie un message aux autres utilisateurs pour prévenir la déconnexion
            io.emit('logout', {pseudo: socket.pseudo, message: message, status: 2});
            // On mmet à jour la liste des utilisateurs présents pour tout le monde
            io.emit('allUsers', users);
        }
    });
    // Il quitte le navigateur
    socket.on('disconnect', function(){
      console.log('User is disconnected');
      // On vérifie s'il a oublié de se deconnecter
      if (users.includes(socket.pseudo)){
        users.splice(users.indexOf(socket.pseudo), 1);
        io.emit('logout', {pseudo: socket.pseudo, message: 'Kenavo!', status: 2});
        io.emit('allUsers', users);
      }
    });
  });

http.listen(port, function(){
    console.log('listening on port : '+ port);
});
```
Also add dependencies in a `package.json` : 
```json
{
  "name": "chat-server",
  "version": "1.0.0",
  "description": "Chat server using Express and Socket.IO",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.7.5"
  }
}
``` 

Use a file `index.js` and start it with :
```shell
node index.js 
```

