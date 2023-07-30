import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getMovies';

const ReviewMovies = () => {
  const [moviesReview, setmoviesReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject('Network response was not ok');
      })
      .then((data) => {
        const reviews = data.results.map((review) => ({
          id: review.id,
          text: review.overwiew,
        }));
        setmoviesReview(reviews);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [id]);

  return (
    <div>
      <ul>
        {moviesReview.map((review) => (
          <li key={review.id}>
            <p>{review.overwiew}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewMovies;