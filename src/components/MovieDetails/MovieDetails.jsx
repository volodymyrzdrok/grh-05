import React, { Suspense, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import routes from 'routes';
import { fetchMovieDetails } from 'sevices/apiMovies';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = props => {
  const [movieObj, setMovieObj] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const getMovieDetails = async id => {
    try {
      const response = await fetchMovieDetails(id);
      setMovieObj(response.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  if (!movieObj) return null;
  const { original_title, poster_path } = movieObj;
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  return (
    <>
      <NavLink to={location.state?.prevLocationPath ?? routes.home}>
        <button>
          <BiArrowBack />
          go back
        </button>
      </NavLink>
      {movieObj && (
        <div>
          <h2>{original_title}</h2>
          <img
            src={`${urlImg + poster_path}`}
            alt={original_title}
            width="250"
          />
        </div>
      )}

      <NavLink to={routes.cast}>Cast</NavLink>
      <br />
      <br />
      <NavLink to={routes.reviews}>Reviews</NavLink>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
