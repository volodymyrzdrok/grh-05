import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { fetchTrandingMovies } from '../../sevices/apiMovies';
import MovieList from 'components/MoviesList/MovieList';

const Home = props => {
  const [moviesPop, setMoviesPop] = useState([]);

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const getTrandingMovies = async () => {
    try {
      const response = await fetchTrandingMovies();

      setMoviesPop(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <>
      <div className="">
        <h2>Trending today</h2>
        {moviesPop.length > 0 && <MovieList movies={moviesPop} />}
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
