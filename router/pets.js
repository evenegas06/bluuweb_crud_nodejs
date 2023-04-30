const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');

// list all.
router.get('/', async (request, response) => {
    try {
        const pets_array = await Pet.find();

        response.render('pets', {
            pets_array
        });
    } catch (error) {
        console.log(error);
    }
});

// Show the form for creating a new resource.
router.get('/crear', (request, response) => {
    response.render('create');
});

// Store a new resource in database.
router.post('/', async (request, response) => {
    const body = request.body;

    try {
        const pet = new Pet(body);
        await pet.save();
        
        response.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;