import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMoviesAllDay } from 'services/getMovies';

const PopularMovies = () => {
  const [movieListDay, setMovieListDay] = useState([]);

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
    <div><h2>Trending Today</h2>
      <ul>
        {movieListDay.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`movies/details/${movie.id}`}> {movie.title || movie.original_name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;