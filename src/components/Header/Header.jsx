import React from 'react'
import css from './Header.module.css'
import {  NavLink } from 'react-router-dom';

const Header = () => {
  return (<header>
    <div className={css.header}>
        <NavLink className={css.home } to="/">Home</NavLink>
        <NavLink  className={css.movies} to="/movies">Movies</NavLink>
    </div>
    </header>
    
  )
}

export default Header;
