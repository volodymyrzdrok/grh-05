import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { fetchMovieCast } from 'sevices/apiMovies';
import { useParams } from 'react-router-dom';

const Cast = props => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  const getMovieCast = async id => {
    try {
      const response = await fetchMovieCast(id);
      setMovieCast(response.data.cast);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <ul>
      {movieCast.length > 0 &&
        movieCast.map(({ original_name, credit_id }) => (
          <li key={credit_id}>
            <p>{original_name}</p>
          </li>
        ))}
    </ul>
  );
};

Cast.propTypes = {};

export default Cast;
