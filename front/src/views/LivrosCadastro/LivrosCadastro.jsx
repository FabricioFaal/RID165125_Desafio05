import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import "./index.scss";
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros';
import LivrosService from "../../api/LivrosService";

const LivrosCadastro = () => {
  const navigate = useNavigate(); // Correto: dentro do componente
  const [livro, setLivro] = useState({
    id: '',
    titulo: '',
    num_paginas: '',
    isbn: '',
    editora: ''
  });

  async function createLivro() {
    const { id, titulo, num_paginas, isbn, editora } = livro;

    const camposPreenchidos = [id, titulo, num_paginas, isbn, editora].every(val => val && val.trim() !== '');

    if (!camposPreenchidos) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const body = {
      titulo,
      num_paginas: Number(num_paginas),
      isbn,
      editora
    };

    try {
      const livroCriado = await LivrosService.createLivro(body);
      alert(`📚 Livro cadastrado com sucesso: ${livroCriado.titulo}`);
      navigate("/livros"); // Redireciona para a lista
    } catch (erro) {
      alert(`❌ Erro ao cadastrar o livro: ${erro.message}`);
      console.error("Erro ao criar livro:", erro);
    }    
  }

  function atualizarCampo(event) {
    const { id, value } = event.target;
    setLivro(prev => ({ ...prev, [id]: value }));
  }

  return (
    <>
      <Header />
      <SubmenuLivros />
      <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input type="text" id='id' required onChange={atualizarCampo} />
            </div>
            <div className='form-group'>
              <label>Título</label>
              <input type="text" id='titulo' required onChange={atualizarCampo} />
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="number" id='num_paginas' required onChange={atualizarCampo} />
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text" id='isbn' required onChange={atualizarCampo} />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text" id='editora' required onChange={atualizarCampo} />
            </div>
            <div className='form-group'>
              <button type="button" onClick={createLivro}>Cadastrar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosCadastro;
