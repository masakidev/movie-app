import { useEffect, useState } from "react";
import { BiStar, BiTime } from "react-icons/bi";
import { useParams } from "react-router-dom";

const API_KEY = "921f321cb57ea624d781e87611177a49";
const baseURL = "https://api.themoviedb.org/3";
const baseIMG = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${baseURL}/movie/${movieId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    };
    getData();
  });

  return (
    <div className="flex justify-center px-4 pb-20">
      <div
        className="w-full h-40 filter blur-2xl absolute"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${baseIMG}${movie.backdrop_path}')`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="py-10 flex flex-col items-center z-10 text-personalwhite">
        <img
          className="w-60 rounded-lg mb-4"
          src={`${baseIMG}${movie.poster_path}`}
          alt=""
        />
        <h1 className="text-3xl mb-2">{movie.title}</h1>
        <div className="flex gap-4">
          <div className="px-2 flex justify-center items-center gap-1 bg-gray-400 bg-opacity-60 rounded-lg mb-7">
            <BiTime />
            <p>{movie.runtime}m</p>
          </div>
          <div className="px-2 flex justify-center items-center gap-1 bg-gray-400 bg-opacity-60 rounded-lg mb-7">
            <BiStar className="text-personalyellow" />
            <p>{movie.vote_average}/10</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold">Overview</h1>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Trailer</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
