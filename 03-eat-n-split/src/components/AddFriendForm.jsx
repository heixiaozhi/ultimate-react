import { useState } from 'react'
import { imageURL } from '../constants'

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(imageURL)

  function handleSubmit(e) {
    // 0、清空默认表单行为并判断数据是否为空
    console.log(e.target)
    e.preventDefault()
    if (!name || !image) return

    // 1、提交数据
    onAddFriend({
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    })
  }

  return (
    <>
      <form className='form-add-friend' onSubmit={handleSubmit}>
        <label htmlFor='name'>👫Friend name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='image'>🌄image URL</label>
        <input
          type='text'
          id='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className='button'>Add</button>
      </form>
    </>
  )
}

export default AddFriendForm
