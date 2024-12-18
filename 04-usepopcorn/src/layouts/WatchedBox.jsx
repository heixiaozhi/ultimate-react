import { useState } from 'react'
import { tempWatchedData } from '../contants/index.js'
import WatchedSummary from '../components/WatchedSummary.jsx'
import WatchedList from '../components/WatchedList.jsx'

const WatchedBox = () => {
  const [watched, setWatched] = useState(tempWatchedData)
  const [isOpen2, setIsOpen2] = useState(true)

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  )
}

export default WatchedBox
