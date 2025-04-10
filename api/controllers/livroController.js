const Livro = require('../models/livroModel');

exports.getTodosLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

exports.criarLivro = async (req, res) => {
  try {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livro' });
  }
};

exports.getLivroPorId = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
};

exports.atualizarLivro = async (req, res) => {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livroAtualizado) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(livroAtualizado);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
};

exports.deletarLivro = async (req, res) => {
  try {
    const livroDeletado = await Livro.findByIdAndDelete(req.params.id);
    if (!livroDeletado) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar livro' });
  }
};
