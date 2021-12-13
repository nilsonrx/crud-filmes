const express = require('express');

// inicializar o modulo de rotas do express
const router = express.Router();

//importo as funcoes do controller;
const FilmessController = require('../controllers/filmes.controller');

// [GET] /filmes = Retorna uma lista de filmes
router.get('/', FilmessController.getFilmes)

// GET /filmes/{id} = retorna um filme de acordo com o seu id
router.get('/:id', FilmessController.getFilmesById)

// POST /filmes/add = Adiciona um novo filme na nossa lista de acordo com o objeto recebido pelo front
router.post('/add', FilmessController.postFilme)

// PUT /filmes/edit/{id} = recebe um filme e um id do front end e atualiza esse filme na nossa lista
router.put('/edit/:id', FilmessController.putFilme)

// DELETE /filmes/delete/{id} = recebe um id e exclui o filme que tiver esse id da lista
router.delete('/delete/:id', FilmessController.deleteFilme)


// exporto as rotas para serem ultilizadas no index
module.exports = router;