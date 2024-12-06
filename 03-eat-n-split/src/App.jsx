import { useState } from 'react'
import AddFriendForm from './components/AddFriendForm'
import SplitBillForm from './components/SplitBillForm'
import { initialFriends } from './constants/index'
import FriendList from './components/FriendList'
import Button from './components/Button'

const App = () => {
  const [friends, setFriends] = useState(initialFriends)
  const [currentFriend, setCurrentFriend] = useState()
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend((d) => !d)
  }

  function handleSelectFriend(friend) {
    // 设置当前Friend
    // 如果设置的用户是当前用户说明要关闭，应该设置为undefined
    setCurrentFriend((current) => {
      return current?.id === friend.id ? undefined : friend
    })
    // 关闭添加朋友组件
    setShowAddFriend(false)
  }

  function handleAddFriend(friend) {
    // 添加数据
    setFriends((current) => {
      return [...current, friend]
    })
    // 关闭添加朋友组件
    setShowAddFriend(false)
  }

  function handleSplitBill(balance) {
    // 更新用户列表的钱
    setFriends((current) => {
      return current.map((item) => {
        if (item.id === currentFriend.id) {
          return { ...item, balance: item.balance + balance }
        }
        return item
      })
    })
    // 给当前用户设置为空
    setCurrentFriend(undefined)
  }

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendList
            friends={friends}
            currentFriend={currentFriend}
            onSelectFriend={handleSelectFriend}
          />
          {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? 'Close' : 'Add friend'}
          </Button>
        </div>
        <div>
          {currentFriend && (
            <SplitBillForm
              currentFriend={currentFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
