import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCaretLeft } from 'react-icons/ai';
import { getById, removeGetByid } from '../../store/actions/movies';

export default function DetailMovie() {
  const { slug } = useParams();
  const { getDataById } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const getMovie = (id) => {
    dispatch(getById(id));
  };

  useEffect(() => {
    if (slug && slug !== '') getMovie(slug);
    return () => {
      dispatch(removeGetByid());
    };
  }, [slug]);

  return (
    <>
      <div className="h-screen bg-gradient-to-br from-cyan-700 to-cyan-900">
        <div className="flex items-center justify-start pt-24 mx-16 mb-5">
          <div className="absolute z-0 rounded-lg md:w-11/12 h-550px bg-gradient-to-tl from-slate-900 text-stone-900" />
          <div className="z-10 flex flex-col items-center md:space-x-40 md:justify-around md:w-11/12 md:flex-row">
            {getDataById ? (
              <>
                <div className="flex flex-col justify-start mb-4 md:w-8/12 md:space-x-40">
                  <h1 className="text-4xl font-bold text-white md:pl-40 md:text-7xl">
                    {getDataById?.Title}
                  </h1>
                  <div className="flex items-center mt-3 mb-3 space-x-3">
                    <div className="flex items-center justify-center h-8 text-center border border-white w-28 hover:bg-white">
                      <p className="font-semibold text-white uppercase hover:text-Navy">
                        {getDataById?.Type}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-8 text-center border border-white w-28 hover:bg-white">
                      <p className="font-semibold text-white hover:text-Navy ">
                        RATING : {getDataById?.imdbRating}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-white">
                    {getDataById?.Year} | {getDataById?.Runtime} |{' '}
                    {getDataById?.Language}
                  </div>
                  <div className="mt-2 leading-7">
                    <p className="text-white">Genre : {getDataById?.Genre}</p>
                    <p className="text-white">Conent : {getDataById?.Plot}</p>
                    <p className="text-white">Actor : {getDataById?.Actors}</p>
                  </div>
                  <Link
                    className="flex items-center justify-around h-8 mt-2 text-center bg-white border rounded text-Navy hover:text-white hover:border-white w-28 hover:bg-Navy hover:shadow-lg"
                    to={'/'}
                  >
                    <AiFillCaretLeft />{' '}
                    <label className="font-semibold">BACK</label>
                  </Link>
                </div>
                <div className="md:w-4/12">
                  <img
                    className="z-10 rounded-lg"
                    src={getDataById?.Poster}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <div className="">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
