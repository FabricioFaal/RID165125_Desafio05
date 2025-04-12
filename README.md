# Biblioteca Online - Gerenciamento de Livros 📚

Projeto completo de gerenciamento de livros, desenvolvido como desafio prático.. A aplicação permite **cadastrar, listar, editar e excluir livros**, unindo um backend em **Node.js + MongoDB** com um frontend moderno em **React + Vite**.

## 🔗 Links do Projeto

- 🔥 **Site publicado**: [https://rid165125desafio05.netlify.app/](https://rid165125desafio05.netlify.app/)
- 🧠 **API (Render)**: [https://rid165125-desafio05.onrender.com/livros](https://rid165125-desafio05.onrender.com/livros)
- 💻 **Repositório GitHub**: [https://github.com/FabricioFaal/RID165125_Desafio05](https://github.com/FabricioFaal/RID165125_Desafio05)

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)

### 🔜 Frontend
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)

---

## ⚙️ Funcionalidades

### API (Back-end)
- `GET /livros`: Lista todos os livros.
- `GET /livros/:id`: Retorna um livro específico.
- `POST /livros`: Cadastra um novo livro.
- `PUT /livros/:id`: Atualiza um livro existente.
- `DELETE /livros/:id`: Remove um livro do sistema.

### Interface (Front-end)
- ✅ Listagem de livros com opções de editar e excluir.
- ✅ Cadastro de novos livros.
- ✅ Edição de livros com formulário pré-preenchido.
- ✅ Exclusão de livros com confirmação.
- ✅ Comunicação com a API totalmente funcional.

---

## 🚀 Como Executar o Projeto Localmente

### 📦 Pré-requisitos
- Node.js (v16 ou superior)
- Conta no [MongoDB Atlas](https://www.mongodb.com/)
- NPM ou Yarn

---

### 🔧 Configuração do Backend

```bash
# Acesse a pasta do back-end
cd server

# Instale as dependências
npm install

# Crie um arquivo .env com sua URI do MongoDB Atlas
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/biblioteca

# Inicie o servidor
npm start

# O backend ficará disponível em: http://localhost:3000
```

### 💻 Configuração do Frontend
````bash
# Acesse a pasta do front-end
cd front

# Instale as dependências
npm install

# Crie um arquivo .env com o endereço da API
VITE_API_URL=http://localhost:3000

# Inicie o projeto
npm run dev

# Acesse o frontend em: http://localhost:5173
````
### 📂 Estrutura do Projeto
Backend (/server)
```bash
server/
├── controllers/
│   └── livroController.js
├── models/
│   └── livroModel.js
├── routes/
│   └── livroRoutes.js
├── server.js
```

Frontend (/front)
```bash
front/
├── src/
│   ├── api/
│   │   └── LivrosService.js
│   ├── components/
│   │   ├── Header/
│   │   └── SubmenuLivros/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Livros/
│   │   ├── LivrosCadastro/
│   │   └── LivrosEdicao/
```

### 📈 Melhorias Futuras
- 🔒 Autenticação de usuários (login e senha)
- 📄 Validações mais robustas no backend
- 📃 Paginação e busca na listagem de livros
- ✅ Testes automatizados (Jest / Cypress)
- 🎨 Layout responsivo com melhor acessibilidade
- 🌐 Internacionalização (i18n)
