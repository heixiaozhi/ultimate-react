import { useRef, useState } from 'react'

const Form = ({ onAddTrip }) => {
  const tripSiteRef = useRef()
  const [tripCount, setTripCount] = useState(1)

  function handleFormSubmit(e) {
    e.preventDefault()
    if (!tripSiteRef.current.value) return
    //提交数据
    onAddTrip({
      count: tripCount,
      site: tripSiteRef.current.value,
      complete: false,
      id: crypto.randomUUID(),
    })
    //置空表单
    setTripCount(1)
    tripSiteRef.current.value = ''
  }

  return (
    <form className='add-form' onSubmit={handleFormSubmit}>
      <h3>What do you need for your 😂 trip?</h3>
      <select
        name='tripCount'
        id='tripCount'
        value={tripCount}
        onChange={(e) => setTripCount(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
      <input type='text' ref={tripSiteRef} placeholder='item...' />
      <button>add</button>
    </form>
  )
}

export default Form
