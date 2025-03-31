// server/routes.js
const express = require('express');
const router = express.Router();
const Filme = require('./models/movieModel'); // Importar o modelo de filme

// Adicionar um filme
router.post('/movies', async (req, res) => {
    const { name, year, genre, rating } = req.body; // Extrair dados do corpo da requisição
    const newMovie = new Movie({ name, year, genre, rating }); // Criar uma nova instância do modelo Movie
    try {
        await newMovie.save(); // Salvar o filme no banco de dados
        res.status(201).json(newMovie); // Retornar o filme adicionado com status 201 (Criado)
    } catch (error) {
        res.status(400).json({ message: error.message }); // Retornar erro
    }
});

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find(); // Buscar todos os filmes no banco de dados
        res.json(movies); // Retornar a lista de filmes
    } catch (error) {
        res.status(500).json({ message: error.message }); // Retornar erro se algo falhar
    }
});

module.exports = router;

