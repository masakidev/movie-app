import { useState } from "react";
import { BiSearch, BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <div className="h-20 flex items-center mb-2">
      {toggleSearch === false ? (
        <div className="animate-fade-in-down w-full flex justify-between items-center">
          <div className="h-10 px-4 py-1 bg-personalblack rounded-xl text-personalyellow flex items-center">
            Welcome, User
          </div>
          <div className="z-50" onClick={handleToggleSearch}>
            <div className="h-10 px-3 py-1 bg-personalyellow rounded-xl flex items-center text-personalblack gap-2">
              <BiSearch />
            </div>
          </div>
        </div>
      ) : (
        <form className="animate-fade-in-down w-full bg-personaldarkgray h-14 px-4 flex items-center justify-center rounded-xl text-personalwhite gap-4">
          <BiArrowBack
            className="text-personalyellow z-50"
            onClick={handleToggleSearch}
          />
          <input
            className="bg-transparent outline-none py-1 rounded-md w-full z-50"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          ></input>
          <Link to={`/search/${searchText}`} className="z-20">
            <button type="submit" className="z-10">
              <BiSearch />
            </button>
          </Link>
        </form>
      )}
    </div>
  );
};

export default Header;
