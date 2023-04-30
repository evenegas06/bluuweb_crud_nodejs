const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');

router.get('/', async (request, response) => {
    try {
        const pets_array = await Pet.find();
        console.log(pets_array);

        response.render('pets', {
            pets_array
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;