import Button from './Button'

const FriendItem = ({ item, currentFriend, onSelectFriend }) => {
  const isSelected = item.id === currentFriend?.id

  return (
    <>
      <li className={isSelected ? 'selected' : ''}>
        <img src={item.image} alt='image' />
        <div>
          <h3>{item.name}</h3>
          {item.balance < 0 && (
            <p className='red'>
              {item.name} owe you {-item.balance}€
            </p>
          )}
          {item.balance > 0 && (
            <p className='green'>
              you owe {item.name} {item.balance}€
            </p>
          )}
          {item.balance === 0 && <p>You and {item.name} are even</p>}
        </div>
        <Button onClick={() => onSelectFriend(item)}>
          {isSelected ? 'Close' : 'Select'}
        </Button>
      </li>
    </>
  )
}

export default FriendItem
