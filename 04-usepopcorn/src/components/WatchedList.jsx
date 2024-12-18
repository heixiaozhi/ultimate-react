import WatchedItem from './WatchedItem'

const WatchedList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default WatchedList
