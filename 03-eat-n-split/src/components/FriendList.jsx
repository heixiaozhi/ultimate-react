import FriendItem from './FriendItem.jsx'
const FriendList = ({ friends, currentFriend, onSelectFriend }) => {
  return (
    <>
      <ul>
        {friends.map((item) => {
          return (
            <FriendItem
              key={item.id}
              item={item}
              currentFriend={currentFriend}
              onSelectFriend={onSelectFriend}
            />
          )
        })}
      </ul>
    </>
  )
}

export default FriendList
