# Biblioteca Central Online - Gerenciamento de Livros 📚

Este é um projeto completo para gerenciamento de livros, utilizando uma API em Node.js e um frontend em React. O sistema permite cadastrar, listar, editar e excluir livros de forma prática e eficiente.

## 🛠️ Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [Express.js](https://expressjs.com/): Framework para criação de APIs.
- [MongoDB](https://www.mongodb.com/): Banco de dados não relacional.
- [Mongoose]: ODM para interação com MongoDB.

### Frontend
- [React](https://reactjs.org/): Biblioteca para construção de interfaces de usuário.
- [React Router DOM]: Gerenciamento de rotas no frontend.
- [Sass]: Pré-processador CSS para estilização.
- [Vite](https://vitejs.dev/): Ferramenta de build e servidor de desenvolvimento.

## ⚙️ Funcionalidades

### API
- **[GET] /livros**: Lista todos os livros.
- **[GET] /livros/:id**: Exibe um livro específico.
- **[POST] /livros**: Cadastra um novo livro.
- **[PUT] /livros/:id**: Atualiza as informações de um livro.
- **[DELETE] /livros/:id**: Exclui um livro pelo ID.

### Frontend
- **Listagem de Livros**: Exibição de todos os livros com opções para editar ou excluir.
- **Cadastro de Livros**: Formulário para adicionar novos livros.
- **Edição de Livros**: Página para editar as informações de um livro existente.
- **Exclusão de Livros**: Opção para remover livros com confirmação.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão recomendada: 16.x ou superior).
- MongoDB (instância local ou Atlas).
- NPM ou Yarn.

### Configuração do Backend
1. Acesse a pasta `server`.
2. Instale as dependências:
   npm install
3. Crie um arquivo  na raiz do backend e insira suas credenciais MongoDB:
  MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/?retryWrites=true&w=majority
4. Inicie o servidor: 
   npm start
5. O backend estará disponível em 'http://localhost:3000'.

### Configuração do Frontend
1. Acesse a pasta 'front'.
2. Instale as dependências:
  npm install
3. Crie um arquivo '.env' na raiz do frontend e configure o endpoint da API:

  VITE_API_URL=http://localhost:3000
4. Inicie o frontend:
  npm run dev
5. O frontend estará disponível em 'http://localhost:5173'.

### 📂 Estrutura do Projeto
## Backend
```bash
  server/
├── controllers/
│   ├── livroController.js
├── models/
│   ├── livroModel.js
├── routes/
│   ├── livroRoutes.js
├── db.js
├── server.js
```
## Frontend
```bash
front/
├── src/
│   ├── api/
│   │   ├── LivrosService.js
│   ├── components/
│   │   ├── Header/
│   │   ├── SubmenuLivros/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Livros/
│   │   ├── LivrosCadastro/
│   │   ├── LivrosEdicao/
```
### 🤔 Melhorias Futuras
- Implementar autenticação de usuário (login e senha).
- Adicionar paginação à listagem de livros.
- Criar testes automatizados para validar as funcionalidades
- Personalizar mensagens de erro no frontend para maior clareza.