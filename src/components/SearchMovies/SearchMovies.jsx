import React, { useEffect, useRef, useState } from 'react';
import { Link,   useLocation,  useSearchParams } from 'react-router-dom';

import { getSearch } from 'services/getMovies';

const SearchMovies = () => {
  const [movies, setMovies] = useState('');
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
const firstRender = useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('q');
  
  useEffect(()=>{
    !searchValue && setSearchParams({})}
    , [searchValue, setSearchParams]
  )

  useEffect(() => {
    if (firstRender.current && searchValue) {
      getSearch(searchValue)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject('Network response was not ok');
        })
        .then((data) => {
          const movies = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title || movie.original_name,
          }));
          setMovieList(movies);
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });

      firstRender.current = false;
    }
  }, [searchValue]);
  
  const changeNameMovies = (e) => {
    setMovies(e.currentTarget.value.toLowerCase());
    
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movies.trim() === '') {
      alert('Write something in input');
      return;
    }
    setMovies('');

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
          title: movie.title || movie.original_name,
        }));
        setMovieList(movies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });

      setSearchParams({ q: movies });
    
    
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
        {movieList.length > 0 ?
        (<div><h2>Movie List</h2>
        <ul>
          
          {movieList.map((movie) => (
            
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state ={{from:location}}>{movie.title || movie.original_name}</Link>
            </li>
          ))}
        </ul></div>
      ) : ("")}
      </div>
    </div>
  );
};

export default SearchMovies;