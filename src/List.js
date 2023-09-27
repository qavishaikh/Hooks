import React from 'react'

function List({items}) {

  return (
    <div>
      <ul>
        {
            items.map((item,index) => (
                <li style={{listStyle:"none"}} key={index}>{item}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default List
