const express = require('express')
const router = express.Router()
const restauranteController = require('../controllers/restaurantes')

// @route POST api/restaurante/cadastro
// @desc cadastrar usuário
// @access Public
router.post('/cadastro', restauranteController.cadastroRestaurante)

// @route GET api/restaurantes
// @desc retorna todos os restaurantes cadastrados
// @access Public
router.get('/', restauranteController.todosRestaurantes)

// @route GET api/restaurantes
// @desc retorna o restaurante pelo id
// @access Public
router.get('/:id', restauranteController.restaurantePorId)

// @route PATCH api/restaurantes
// @desc adiciona comentários ao restaurante
// @access Public
router.patch('/:id', restauranteController.adicionarComentario)



module.exports = router
