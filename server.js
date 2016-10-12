// берём Express
//var express = require('express');
var http = require('http');

// создаём Express-приложение
//var app = express();
var static = require('node-static');
var file = new static.Server('.');

// создаём маршрут для главной страницы
// http://localhost:8080/
/*
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
*/
http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);


// запускаем сервер на порту 8080
//app.listen(8080);
// отправляем сообщение
//console.log('Сервер стартовал!');

console.log('Server running on port 8080');