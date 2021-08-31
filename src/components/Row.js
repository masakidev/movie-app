import { useState, useEffect } from "react";

const baseURL = 'https://api.themoviedb.org/3'
const baseIMG = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}${fetchUrl}`)
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className='mb-6'>
      <h1 className='text-white mb-1'>{title}</h1>
      <div className='flex h-48 overflow-y-hidden overflow-x-scroll gap-3'>
        {
          movies.map(movie => (
            <img className="rounded-md" src={`${baseIMG}${movie.poster_path}`} alt={movie.title} key={movie.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Row;