import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { getSearch } from 'services/getMovies';

const SearchMovies = () => {
  const [movies, setMovies] = useState('');
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate()

  const changeNameMovies = (e) => {
    setMovies(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movies.trim() === '') {
      alert('Write something in input');
      return;
    }
    navigate(`/movies?q=${movies}`);

    getSearch(movies)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject('Network response was not ok');
      })
      .then((data) => {
        const movies = data.results.map((movie) => ({
          id: movie.id,
          name: movie.name,
        }));
        setMovieList(movies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={movies}
          onChange={changeNameMovies}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Movie List</h2>
        <ul>
          {movieList.map((movie) => (
            <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchMovies;