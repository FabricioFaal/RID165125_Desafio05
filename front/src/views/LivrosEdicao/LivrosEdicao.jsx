import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './index.scss';
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros';
import { useParams } from 'react-router-dom';
import LivrosService from '../../api/LivrosService';
import { useNavigate } from 'react-router-dom';


const LivrosEdicao = () => {
  let { id } = useParams();
  const [livro, setLivro] = useState({
    id: '',
    titulo: '',
    num_paginas: '',
    isbn: '',
    editora: '',
  });
  const navigate = useNavigate();

  // Carregar o livro ao entrar na página
  useEffect(() => {
    async function fetchLivro() {
      try {
        const data = await LivrosService.getLivro(id);
        setLivro(data);
      } catch (error) {
        console.error(error);
        alert('Livro não encontrado ou erro na requisição.');
      }
    }

    fetchLivro();
  }, [id]);

  // Atualizar livro
  async function editLivro() {
    const body = {
      titulo: livro.titulo,
      num_paginas: Number(livro.num_paginas),
      isbn: livro.isbn,
      editora: livro.editora
    };
  
    console.log("ID:", id);
    console.log("Dados para enviar:", body);


    try {
      const data = await LivrosService.updateLivro(id, body); // 👈 pega o ID da URL
      alert(data.mensagem || "Livro atualizado com sucesso!");
      navigate('/livros');
    } catch (error) {
      console.error("Erro ao atualizar o livro:", error);
      alert("Erro ao atualizar o livro: " + error.message);
    }
  }
  
  return (
    <>
      <Header />
      <SubmenuLivros />
      <div className="livrosCadastro">
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario">
            <div className="form-group">
              <label>Id</label>
              <input
                type="text"
                disabled
                value={livro.id}
              />
            </div>
            <div className="form-group">
              <label>Título</label>
              <input
                type="text"
                value={livro.titulo}
                onChange={(e) => setLivro({ ...livro, titulo: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Número de Páginas</label>
              <input
                type="number"
                value={livro.num_paginas}
                onChange={(e) => setLivro({ ...livro, num_paginas: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>ISBN</label>
              <input
                type="text"
                value={livro.isbn}
                onChange={(e) => setLivro({ ...livro, isbn: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Editora</label>
              <input
                type="text"
                value={livro.editora}
                onChange={(e) => setLivro({ ...livro, editora: e.target.value })}
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={editLivro}>
                Atualizar Livro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosEdicao;
