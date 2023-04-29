const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    // response.send('Mi respuesta desde express...'); //v1
    response.render('index', {
        title: 'Mi titulo dinámico...'
    });
});

router.get('/servicios', (request, response) => {
    // response.send('Estas en la página de servicios...'); // v1
    response.render('services', {
        services_title: 'Este es un mensaje dinámico de servicios...'
    });
});

module.exports = router;