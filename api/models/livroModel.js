const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  num_paginas: { type: Number, required: true },
  isbn: { type: String, required: true },
  editora: { type: String, required: true },
});

module.exports = mongoose.model('Livro', livroSchema);
