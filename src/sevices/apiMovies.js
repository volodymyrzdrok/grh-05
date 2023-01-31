import axios from 'axios';
const MOVIES_URL = `https://api.themoviedb.org/3`;
const KEY_API = 'c89f43b1c825df5dc6e73406f0f79577';

axios.defaults.baseURL = MOVIES_URL;

export async function fetchTrandingMovies(time_window = 'day') {
  try {
    const response = await axios.get(`/trending/movie/${time_window}`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSerchinsMovies(queryValue) {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: KEY_API,
        query: queryValue,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movie_id) {
  try {
    const response = await axios.get(`/movie/${movie_id}`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(movie_id) {
  try {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReviews(movie_id) {
  try {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
