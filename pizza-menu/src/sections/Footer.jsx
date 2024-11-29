import React from 'react'

const Footer = () => {
  const hour = new Date().getHours()
  const openTime = 10
  const shutTime = 22
  const isOpen = hour >= openTime && hour <= shutTime

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openTime={openTime} shutTime={shutTime} />
      ) : (
        <p>
          We're happy to welcome you between {openTime} and {shutTime}.
        </p>
      )}
    </footer>
  )
}

function Order({ openTime, shutTime }) {
  return (
    <>
      <div className='order'>
        <p>
          We're open from {openTime}:00 to {shutTime}:00. Come visit us or order
          online.
        </p>
        <button className='btn'>order</button>
      </div>
    </>
  )
}

export default Footer
