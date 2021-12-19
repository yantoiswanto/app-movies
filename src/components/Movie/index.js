import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import { getByTitle } from '../../store/actions/movies';
import { addFavoriteMovie } from '../../store/actions/favorite';
import { Link } from 'react-router-dom';

export default function Movie() {
  const { getDataByTitle } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleAddToFavorite = (movieFavorite) => {
    dispatch(addFavoriteMovie(movieFavorite));
  };
  useEffect(() => {
    dispatch(getByTitle('Fast'));
  }, [dispatch]);

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-700 to-cyan-900">
        <div className="flex flex-col flex-wrap items-center justify-center py-10 sm:flex-row">
          {getDataByTitle &&
            getDataByTitle.map((movie) => (
              <div
                className="flex flex-col items-center justify-start h-auto px-10 py-5 sm:w-3/12 "
                key={movie.imdbID}
              >
                <div className="absolute z-0 rounded-lg h-550px w-80 bg-slate-50 " />
                <Link to={'/' + movie.imdbID} className="z-0 -mb-3 w-72">
                  <img
                    src={movie.Poster}
                    alt=""
                    className="z-10 mt-4 rounded-lg h-400px w-72"
                  />

                  <div className="z-10 flex items-center justify-center h-20 px-5 mt-3 rounded-lg bg-Grey">
                    <h1 className="font-semibold text-gray-900">
                      {movie.Title}
                    </h1>
                  </div>
                </Link>
                <div className="z-10 flex flex-col justify-between w-64 mt-5">
                  <div className="flex items-center justify-between mt-3 rounded-lg bg-Blue">
                    <div className="w-4/12 ml-5 text-white">
                      <p>{movie.Year}</p>
                    </div>
                    <div className="w-8/12 ">
                      <button
                        className="z-20 flex items-center justify-around w-full h-10 text-white rounded-lg bg-Navy hover:shadow-xl hover:outline-Navy outline hover:bg-white hover:text-Navy"
                        onClick={() => handleAddToFavorite(movie)}
                      >
                        <AiOutlineHeart />
                        Add Favorite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
