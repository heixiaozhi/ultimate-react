const PackingItem = ({ item, onCheck, onDelete }) => {
  return (
    <li>
      <input
        type='checkbox'
        name='complete'
        id='complete'
        checked={item.complete}
        onChange={() => onCheck(item.id)}
      />
      {/* style={{ textDecoration: 'line-through' }} */}
      <span
        style={{
          textDecoration: item.complete ? 'line-through' : 'none',
        }}
      >
        {item.count} {item.site}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  )
}

export default PackingItem
