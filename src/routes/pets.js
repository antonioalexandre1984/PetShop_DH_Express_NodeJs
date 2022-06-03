const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');


// GET - /pets - Listar todos os pets
router.get('/pets', (req, res) => {
    res.send('Lista de pets')
});

// GET - /pets/:id - Listar os pets por ID (/pets/1)
router.get('/pets/:id', (req, res) => {
    res.send('Detalhes do pet: ' + req.params.id)
});

// POST - /pets - Criar um novo pet
router.post('/pets', (req, res) => {
    res.send('cadastro do pet')
});

// PUT - /pets/:id - Atualizar um pet por ID (/pets/1)
router.put('/pets/:id', (req, res) => {
    res.send('Atualização de um pet: ' + req.params.id)
})

// DELETE - /pets/:id - Deletar um pet por ID (/pets/1)
router.delete('/pets/:id', (req, res) => {
    res.send('Exclusão de um pet: ' + req.params.id)
})



module.exports = router;
