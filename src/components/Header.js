import { Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-around h-16 gap-0 mt-10 mb-10 space-y-2 md:space-y-0 md:mt-0 md:mb-0 md:flex-row">
      <div className=" 2/12">
        <Link to="/">
          <div className="flex items-center justify-center w-40 h-10 font-semibold text-white border-2 rounded-lg hover:shadow-lg bg-Navy hover:border-Navy hover:text-Navy hover:bg-white">
            APP MOVIES
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center 8/12 ">
        <Search search="search" />
      </div>
      <div className="2/12">
        <Link to="/favorite">
          <div className="flex items-center justify-center w-40 h-10 font-semibold text-white border-2 rounded-lg hover:shadow-lg bg-Navy hover:border-Navy hover:text-Navy hover:bg-white">
            FAVORITE
          </div>
        </Link>
      </div>
    </div>
  );
}
