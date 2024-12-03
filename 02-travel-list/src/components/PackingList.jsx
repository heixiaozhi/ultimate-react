import { useState } from 'react'
import PackingItem from './PackingItem'

const PackingList = ({ trips, onCheck, onDelete, onClean }) => {
  const [selectValue, setSelectValue] = useState('input')
  // 浅拷贝
  let copyTrips = [...trips]
  if (selectValue === 'input') {
    copyTrips = [...trips]
  } else if (selectValue === 'description') {
    copyTrips.sort((a, b) => {
      if (a.site < b.site) {
        return -1
      } else {
        return 1
      }
    })
  } else {
    copyTrips.sort((a, b) => {
      // true false 再用比较运算符 会转换为0，1
      if (a.complete < b.complete) {
        return -1
      } else {
        return 1
      }
    })
  }

  return (
    <div className='list'>
      <ul>
        {copyTrips.map((item) => {
          return (
            <PackingItem
              key={item.id}
              item={item}
              onCheck={onCheck}
              onDelete={onDelete}
            />
          )
        })}
      </ul>
      <div className='actions'>
        <select
          name='order'
          id='order'
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value='input'>sort by input order</option>
          <option value='description'>sort by description</option>
          <option value='status'>sort by packed status</option>
        </select>
        <button onClick={onClean}>clear list</button>
      </div>
    </div>
  )
}

export default PackingList
