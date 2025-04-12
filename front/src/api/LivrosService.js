const API_URL = import.meta.env.VITE_API_URL;

const LivrosService = {
  getLivros: async () => {
    const response = await fetch(`${API_URL}/livros`);
    if (!response.ok) throw new Error('Erro ao buscar livros');
    return await response.json();
  },

  getLivro: async (id) => {
    const response = await fetch(`${API_URL}/livros/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar o livro');
    return await response.json();
  },

  createLivro: async (dados) => {
    const response = await fetch(`${API_URL}/livros`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!response.ok) throw new Error('Erro ao criar o livro');
    return await response.json();
  },

  updateLivro: async (id, dados) => {
    const response = await fetch(`${API_URL}/livros/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!response.ok) throw new Error('Erro ao atualizar o livro');
    return await response.json(); // importante: tem que retornar a mensagem do backend aqui
  },

  deleteLivro: async (id) => {
    const response = await fetch(`${API_URL}/livros/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao excluir o livro');
    return await response.json();
  },
};

export default LivrosService;
