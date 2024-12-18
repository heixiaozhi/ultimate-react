import { useState } from 'react'
import { tempMovieData } from '../contants/index.js'
import MoviesList from '../components/MoviesList.jsx'

const MoviesBox = () => {
  const [movies, setMovies] = useState(tempMovieData)
  const [isOpen1, setIsOpen1] = useState(true)
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <MoviesList movies={movies} />}
    </div>
  )
}

export default MoviesBox
