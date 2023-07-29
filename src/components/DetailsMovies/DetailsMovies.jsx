import React, { useEffect, useState } from 'react';
import { getDetails } from 'services/getMovies';
import { useParams } from 'react-router-dom';

const DetailsMovies = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
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
          overview: data.overview,
          genres: data.genres,
        };
        setDetailsMovie(details);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  return (
    <div>
      {detailsMovie.id && (
        <div>
          <img src={detailsMovie.backdrop_path} alt="Movie Poster" crossorigin="anonymous" />
          <h2>{detailsMovie.title}</h2>
          <h2>Overview</h2>
          <p>{detailsMovie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {detailsMovie.genres &&
              detailsMovie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailsMovies;