const Footer = ({ trips }) => {
  if (!trips.length) {
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    )
  }

  let tripsNum = trips.length
  let completeNum = trips.filter((trip) => trip.complete).length
  let percent = Math.round((completeNum / tripsNum) * 100)

  return (
    <footer className='stats'>
      <em>
        {percent === 100
          ? '"You got everything! Ready to go ✈️"'
          : `💼 You have ${tripsNum} items on your list, and you already packed
        ${completeNum} (${percent}%)`}
      </em>
    </footer>
  )
}

export default Footer
