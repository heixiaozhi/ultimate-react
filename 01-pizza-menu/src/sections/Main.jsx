import React from 'react'
import Pizza from '../components/Pizza'

const Main = ({ pizzas }) => {
  return (
    <main className='menu'>
      <h2>our menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => {
              return <Pizza key={pizza.name} pizza={pizza} />
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  )
}

export default Main
