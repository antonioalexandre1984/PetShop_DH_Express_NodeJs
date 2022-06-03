const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// GET - /upon - Visualizar página inicial da empresa
router.get('/', homeController.index)

// GET - /upon - Visualizar página sobre da empresa
router.get('/upon', homeController.upon);

// GET - /services - Visualizar página sobre serviços oferecidos da empresa
router.get('/services',homeController.services);

// GET - login - Visualizar página de login do administrador.
router.get('/login', homeController.login);

// GET - /contact - Visualizar página de formulário de contato com a empresa.
router.get('/contact', homeController.contact);

// GET - /contact - Visualizar página de formulário do cliente registar no sistema.
router.get('/register', homeController.register);


module.exports = router;