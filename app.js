const express = require('express');
const app = express();
const web_router = require('./router/web');
const pets_router = require('./router/pets');

const port = 3000;

/* --- Template engine --- */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* --- Middleware --- */
app.use(express.static(__dirname + '/public')); // static files

/* --- Routes --- */
app.use('/', web_router);
app.use('/mascotas', pets_router);

/* --- Middleware --- */
app.use((request, response, next) => {
    // response.status(404).sendFile(__dirname + '/public/404.html'); //v1

    response.status(404).render('404', {
        title: 'Página 404',
        description: 'No eh encontrado lo que buscas xD...',
    });
});

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto ', port);
});