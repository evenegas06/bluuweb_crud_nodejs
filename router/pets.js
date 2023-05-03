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
        console.error(error);
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
        console.error(error);
    }

});

//Display the specified resource.
router.get('/:id', async (request, response) => {
    const id = request.params.id;

    try {
        const pet = await Pet.findById(id);

        response.render('pet-details', {
            pet,
            error: false,
        });
    } catch (error) {
        console.error(error);

        response.render('pet-details', {
            error: true,
            message: 'No se encuentra el id seleccionado. :('
        });
    }
});

router.get('/delete/:id', async (request, response) => {
    const id = request.params.id;

    try {
        await Pet.findByIdAndDelete(id);

        response.redirect('/mascotas');
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;