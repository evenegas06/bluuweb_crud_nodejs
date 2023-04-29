const express = require('express');
const app = express();

const port = 3000;

/*--- Template engine --- */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* --- Middleware --- */
app.use(express.static(__dirname + '/public')); // static files

/* --- Routes ---*/
app.get('/', (request, response) => {
    response.send('Mi respuesta desde express...');
});

app.get('/servicios', (request, response) => {
    response.send('Estas en la página de servicios...');
});

/* --- Middleware --- */
app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto ', port);
});