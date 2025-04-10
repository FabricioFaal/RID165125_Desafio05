const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
console.log('livroController:', livroController);

router.get('/', livroController.getTodosLivros);
router.post('/', livroController.criarLivro);
router.get('/:id', livroController.getLivroPorId);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.deletarLivro);

module.exports = router;
