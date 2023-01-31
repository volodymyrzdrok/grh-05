import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'sevices/apiMovies';

const Reviews = props => {
  const [reviewsMovie, setReviewsMovie] = useState([]);

  const { movieId } = useParams();

  const getMovieReviews = async id => {
    try {
      const response = await fetchMovieReviews(id);
      setReviewsMovie(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviewsMovie.length > 0 ? (
        reviewsMovie.map(({ author, id }) => (
          <li key={id}>
            <p>{author}</p>
          </li>
        ))
      ) : (
        <p>nema nema</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {};

export default Reviews;
