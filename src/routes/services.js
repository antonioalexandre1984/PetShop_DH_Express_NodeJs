const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');


router.get('/',serviceController.index );

// GET - /services - Listar todos os pets
router.get('/services', serviceController.create);

// GET - /services - Listar todos os pets
router.get('/services',serviceController.show);

// GET - /pets/:id - Listar os pets por ID (/pets/1)
router.get('/services/:id', serviceController.edit);

// POST - /pets - Criar um novo pet
router.post('/services', serviceController.store);

// PUT - /services/:id - Atualizar um pet por ID (/pets/1)
router.put('/services/:id', serviceController.update);

// DELETE - /pets/:id - Deletar um pet por ID (/pets/1)
router.delete('/services/:id', serviceController.destroy);



module.exports = router
