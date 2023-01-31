import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { fetchSerchinsMovies } from 'sevices/apiMovies';
import MovieList from 'components/MoviesList/MovieList';
import { useEffect } from 'react';

const SearchMovies = props => {
  const [moviesFound, setMovieFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueParams = searchParams.get('query');

  const getSearchMovies = async queryValue => {
    try {
      const response = await fetchSerchinsMovies(queryValue);

      setMovieFound(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    if (valueParams) {
      getSearchMovies(valueParams);
    }
  }, [valueParams]);

  const onSubmitForm = e => {
    e.preventDefault();

    const value = e.target.input.value.toLowerCase().trim();
    setSearchParams({ query: value });

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmitForm} action="">
        <input name="input" type="text" />
        <button>search</button>
      </form>

      {moviesFound.length > 0 && <MovieList movies={moviesFound} />}
    </>
  );
};

SearchMovies.propTypes = {};

export default SearchMovies;
