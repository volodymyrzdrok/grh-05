import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import routes from 'routes';

const MovieList = ({ movies }) => {
  const { pathname, search } = useLocation();

  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <NavLink
            to={`${routes.movies}/${id}`}
            state={{ prevLocationPath: pathname + search }}
          >
            {original_title}
          </NavLink>
          {/* <p>{original_title}</p> */}
        </li>
      ))}
      <li></li>
    </ul>
  );
};

MovieList.propTypes = {};

export default MovieList;
