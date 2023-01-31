import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'routes';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.movies} element={<SearchMovies />} />
        <Route path={routes.movieId} element={<MovieDetails />}>
          <Route path={routes.cast} element={<Cast />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
