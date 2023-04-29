const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('pets', {
        pets_array: [
            { id: '1', name: 'rex', description: 'rex descripcion' },
            { id: '2', name: 'boby', description: 'boby descripcion' },
        ]
    });
});

module.exports = router;