import NavBar from './layouts/NavBar'
import Main from './layouts/Main'

import Box from './layouts/Box'
import { useState } from 'react'
import { tempWatchedData } from './contants/index.js'
import { tempMovieData } from './contants/index.js'
import WatchedSummary from './components/WatchedSummary.jsx'
import WatchedList from './components/WatchedList.jsx'
import MoviesList from './components/MoviesList.jsx'
import SearchMovie from './components/SearchMovie.jsx'
import NumResult from './layouts/NumResult.jsx'

export default function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  return (
    <>
      <NavBar>
        <SearchMovie />
        <NumResult />
      </NavBar>
      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  )
}
