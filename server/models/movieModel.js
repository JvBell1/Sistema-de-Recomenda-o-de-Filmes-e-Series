// server/models/movieModel.js
const mongoose = require('mongoose');

const esquema_filmes = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 }
});

const Filme  = mongoose.model('Filme', esquema_filmes);

module.exports = Filme;