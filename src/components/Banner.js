import { useState, useEffect } from "react";
import Header from "./Header";
import requests from "../requests";
import { BiStar } from 'react-icons/bi';

const baseURL = 'https://api.themoviedb.org/3'
const baseIMG = 'https://image.tmdb.org/t/p/original'

const Banner = () => {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}${requests.fetchTopRated}`);
      const data = await response.json();
      const randomData = data.results[Math.floor(Math.random() * data.results.length)]
      setMovie(randomData);
    }
    fetchData();
  }, [])

  return (
    <div 
    className='h-96 mb-10 px-4 text-white relative' 
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(
      "${baseIMG}${movie.backdrop_path}"
      )`,
      backgroundPosition: "center center",
      }}>
      <Header />
      <div className='flex flex-col text-white'>
        <div className="z-0 bg-gradient-to-t from-personalblack absolute w-full h-96 left-0 top-0"></div>
        <h1 className='z-10 text-4xl font-bold mb-2'>
          {movie.title}
        </h1>
        <div className='w-16 z-10 flex justify-center items-center gap-1 bg-gray-400 bg-opacity-60 rounded-lg mb-7'>
          <BiStar className='text-personalyellow' />
          <p className='z-10 text-lg font-bold'>
            {movie.vote_average}
          </p>
        </div>
        <p className='z-10'>
          {movie?.overview}
        </p>
      </div>
    </div>
  )
}

export default Banner;