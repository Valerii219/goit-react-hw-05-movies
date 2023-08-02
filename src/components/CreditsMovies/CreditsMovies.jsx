import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getCredits } from 'services/getMovies';

import noImages from '..//../images/noImages.jpg';


const CreditsMovies = () => {
  const [movieImg, setmovieImg] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCredits(id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject('Network response was not ok');
      })
      .then((data) => {
        const newImg = data.cast.map((movie) => ({
          id: movie.id,
          img: movie.profile_path, // 
        }));
        setmovieImg(newImg);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [id]);

  return (
    <div>
      <ul>
        {movieImg.map((movie) => (
          <li key={movie.id}>
            <img style={{ margin:`35 0 0 10`}} src={movie.img ? `https://image.tmdb.org/t/p/w500/${movie.img}` : noImages} width={250} alt="Movie Poster" />
          </li>
        ))}
      </ul>
    </div>
  );
};



export default CreditsMovies;





