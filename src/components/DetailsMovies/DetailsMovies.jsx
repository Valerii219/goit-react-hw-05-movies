import React, { useEffect, useState, useRef } from 'react';
import { getDetails } from 'services/getMovies';
import { NavLink, useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import noImages from '../../images/noImages.jpg';

import css from './DetailsMovies.module.css';

const DetailsMovies = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const savedDetails = useRef(location); 
 
  
  useEffect(() => {
    if (savedDetails.current[id]) {
      setDetailsMovie(savedDetails.current[id]);
    } else {
      getDetails(id)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject('Network response was not ok');
        })
        .then((data) => {
          const details = {
            id: data.id,
            title: data.title || data.original_name,
            img: data.backdrop_path,
            score: Math.ceil(Number(data.vote_average) * 10),
            overview: data.overview,
            genres: data.genres,
          };
          setDetailsMovie(details);
          savedDetails.current[id] = details; 
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
        });
    }
  }, [id]);

  const handleBack = () => {
    navigate(savedDetails.current.state?.from ?? '/', {replace: true} );
    
  };

  return (
    <div>
      <div>
        <button onClick={handleBack} className={css.btn}>
          Back
        </button>
      </div>
      {detailsMovie.id && (
        <div>
          <img
            className={css.img}
            src={
              detailsMovie.img
                ? `https://image.tmdb.org/t/p/w500/${detailsMovie.img}`
                : noImages
            }
            alt="Movie Poster"
          />
          <h2 className={css.title}>{detailsMovie.title}</h2>
          <p className={css.text}>Users score: {detailsMovie.score}%</p>
          <h2 className={css.title}>Overview</h2>
          <p className={`${css.text} ${css.justify}`}>{detailsMovie.overview}</p>
          <h2 className={css.title}>Genres</h2>
          <ul className={css.q}>
            {detailsMovie.genres &&
              detailsMovie.genres.map((genre) => (
                <li key={genre.id} className={css.text}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div>
        <p className={css.title}>Additional information</p>
        <ul className={css.ul}>
          <li>
            <NavLink to={`cast`}  className={css.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`review`} className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
        
      </div>
      <Outlet />
      <div>
      </div>
    </div>
  );
};

export default DetailsMovies;