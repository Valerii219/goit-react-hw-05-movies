import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getMoviesAllDay } from 'services/getMovies';
import css from './PopularMovies.module.css'

const PopularMovies = () => {
  const [movieListDay, setMovieListDay] = useState([]);
  
const location = useLocation();

  useEffect(() => {
    getMoviesAllDay()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject('Network response was not ok');
      })
      .then((data) => {
        const allDay = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title || movie.original_name
          ,
        }));
        setMovieListDay(allDay);
        
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <h2 className ={css.trend}>Trending Today  </h2>
      <ul className={css.list}>
        {movieListDay.map((movie) => (
          <li key={movie.id} >
            <NavLink to={`movies/${movie.id}`} className={css.movieList} state ={{from:location}}> {movie.title || movie.original_name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
