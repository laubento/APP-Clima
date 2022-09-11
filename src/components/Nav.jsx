import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from '../img/clima.png'
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="container-principal">
      <Link className='link' to='/'> 
        <span className="container-home">
          <img src={Logo} className="logo-clima" alt="App Clima" />
          Wheather APP
        </span>
      </Link>
      <Link className='link' to='/about'>
        <span className='about'>Sobre la APP❓</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
