const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://fabriciofaal:Faal226974@cluster0.qgzgjkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
});

app.use('/livros', livroRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});