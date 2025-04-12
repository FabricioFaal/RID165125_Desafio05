import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import Home from "./views/Home/Home";
import Livros from "./views/Livros/Livros";
import LivrosCadastro from "./views/LivrosCadastro/LivrosCadastro";
import LivrosEdicao from "./views/LivrosEdicao/LivrosEdicao";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/livros/cadastro" element={<LivrosCadastro />} />
        <Route path="/livros/editar/:id" element={<LivrosEdicao />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
