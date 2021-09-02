import { BiHome, BiBookmark, BiCompass, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bottom-3 fixed z-50">
      <div className="h-16 text-white mx-4 bg-personaldarkgray flex justify-around items-center text-sm rounded-xl">
        <Link to="/">
          <div className="flex flex-col items-center hover:text-personalyellow">
            <BiHome className="h-6 w-6" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/mylist">
          <div className="flex flex-col items-center hover:text-personalyellow">
            <BiBookmark className="h-6 w-6" />
            <p>My List</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex flex-col items-center hover:text-personalyellow">
            <BiCompass className="h-6 w-6" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex flex-col items-center hover:text-personalyellow">
            <BiUser className="h-6 w-6" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
