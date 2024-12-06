import { useState } from 'react'

const SplitBillForm = ({ currentFriend, onSplitBill }) => {
  const [bill, setBill] = useState('')
  const [userExpense, setUserExpense] = useState('')
  const [whoIsPaying, setWhoIsPaying] = useState('user')
  const friendExpense = bill ? bill - userExpense : ''

  function handleSubmit(e) {
    //0、清空表单默认行为， 验证表单是否有数据
    e.preventDefault()
    if (!bill || !userExpense) return

    //1、计算花费，用户付钱朋友就减去自己的钱，朋友付钱加上用户的钱
    let balance = whoIsPaying === 'user' ? -friendExpense : userExpense

    // 2、提交数据
    onSplitBill(balance)
  }

  return (
    <>
      <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>split a bill with anthony</h2>
        <label htmlFor='bill'>💰bill value</label>
        <input
          type='text'
          id='bill'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <label htmlFor='user'>🧍Your expense</label>
        <input
          type='text'
          id='user'
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
        />
        <label htmlFor='anthony'>👫{currentFriend.name} expense</label>
        <input type='number' id='anthony' disabled value={friendExpense} />
        <label htmlFor='paying'>🤑Who is paying the bill</label>
        <select
          name='whoPaying'
          id='paying'
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value='user'>you</option>
          <option value={currentFriend.id}>{currentFriend.name}</option>
        </select>
        <button className='button'>Split bill</button>
      </form>
    </>
  )
}

export default SplitBillForm
