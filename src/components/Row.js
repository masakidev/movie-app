import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://api.themoviedb.org/3";
const baseIMG = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}${fetchUrl}`);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="text-white ml-1 mb-1">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="mx-4 mb-8 flex gap-4">
          {movies.map((movie) => (
            <div className="w-40 py-3" key={movie.id}>
              <Link to={`/title/${movie.id}`}>
                <img
                  className="rounded object-contain transform transition-transform hover:scale-105 hover:opacity-70"
                  src={`${baseIMG}${movie.poster_path}`}
                  alt={movie.title}
                  key={movie.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
