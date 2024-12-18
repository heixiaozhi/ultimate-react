import MoviesItem from './MoviesItem'

const MoviesList = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MoviesItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default MoviesList
