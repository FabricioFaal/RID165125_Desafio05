import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./index.scss";

function Header() {
  return (
    <div className='header'>
        <Link to="/"><img src={logo}/></Link>
        <ul>
            <li><Link to="/livros">Listar Livros</Link></li>
            <li><Link to="/livros/cadastro">Cadastrar Livros</Link></li>
        </ul>        
    </div>
  )
}

export default Header
