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
    // response.send('Mi respuesta desde express...'); //v1
    
    response.render('index', {
        titulo: 'Mi titulo dinámico...'
    });
});

app.get('/servicios', (request, response) => {
    // response.send('Estas en la página de servicios...'); // v1
    
    response.render('servicios', {
        tituloServicios: 'Este es un mensaje dinámico de servicios...'
    });
});

/* --- Middleware --- */
app.use((request, response, next) => {
    // response.status(404).sendFile(__dirname + '/public/404.html'); //v1
    
    response.status(404).render('404', {
        titulo: 'Página 404',
        descripcion: 'No eh encontrado lo que buscas xD...',
    })
});

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto ', port);
});