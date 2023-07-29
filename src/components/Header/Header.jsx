import React from 'react'
import css from './Header.module.css'
import {  NavLink } from 'react-router-dom';

const Header = () => {
  return (<header>
    <div className={css.color}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
    </div>
    </header>
    
  )
}

export default Header;
