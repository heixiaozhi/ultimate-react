import { useState } from 'react'
import Footer from './components/Footer'
import Form from './components/Form'
import Logo from './components/Logo'
import PackingList from './components/PackingList'

function App() {
  const [trips, setTrips] = useState([])

  function handleAddTrip(item) {
    setTrips((current) => {
      return [...current, item]
    })
  }

  function handleCheckTrip(id) {
    setTrips((current) => {
      return current.map((item) => {
        return item.id === id ? { ...item, complete: !item.complete } : item
      })
    })
  }

  function handleDeleteTrip(id) {
    setTrips((current) => {
      return current.filter((item) => item.id != id)
    })
  }

  function handleCleanTrip() {
    setTrips([])
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form onAddTrip={handleAddTrip} />
        <PackingList
          trips={trips}
          onCheck={handleCheckTrip}
          onDelete={handleDeleteTrip}
          onClean={handleCleanTrip}
        />
        <Footer trips={trips} />
      </div>
    </>
  )
}

export default App
