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
          text: review.content,
        }));
        setmoviesReview(reviews);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [id]);

  return (
    <div>
      {moviesReview.length > 0 ? (
        <ul>
          {moviesReview.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewMovies;