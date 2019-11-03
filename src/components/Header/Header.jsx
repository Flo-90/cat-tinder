import React from 'react';
import {Link} from 'react-router-dom';
import {header} from './Header.module.css';

const Header = () => {
  return (  
    <header className={header}>
        <Link to="/">
          <h1>Pet the Cat?</h1>
        </Link>
    </header>
  );
}

export default Header;