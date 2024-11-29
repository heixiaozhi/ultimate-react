import React from 'react'
import pizzaData from '../data'

const Pizza = ({ pizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3 style={{ fontSize: '24px' }}>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {pizza.soldOut ? <span>SOLD OUT</span> : <span>{pizza.price}</span>}
      </div>
    </li>
  )
}

export default Pizza
