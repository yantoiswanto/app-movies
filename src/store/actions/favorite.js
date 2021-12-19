import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from './types';

export const addFavoriteMovie = (movie) => async (dispatch) => {
  const favoriteMovie = localStorage.getItem('favoriteMovie')
    ? JSON.parse(localStorage.getItem('favoriteMovie'))
    : [];

  const duplicates = favoriteMovie.filter(
    (favoriteItem) => favoriteItem.imdbID === movie.imdbID
  );
  if (duplicates.length === 0) {
    const movieToAdd = {
      ...movie,
      count: 1,
    };

    favoriteMovie.push(movieToAdd);

    localStorage.setItem('listMovie', JSON.stringify(favoriteMovie));

    dispatch({
      type: ADD_FAVORITE_MOVIE,
      payload: favoriteMovie,
    });
  }
};

export const removeFavoriteMovie = (movie) => async (dispatch) => {
  const favoriteMovie = localStorage.getItem('favoriteMovie')
    ? JSON.parse(localStorage.getItem('favoriteMovie'))
    : [];

  const deleteMovie = favoriteMovie.filter(
    (favoriteItem) => favoriteItem.imdbID !== movie.imdbID
  );

  localStorage.setItem('favoriteMovie', JSON.stringify(deleteMovie));
  dispatch({
    type: REMOVE_FAVORITE_MOVIE,
    payload: deleteMovie,
  });
};
