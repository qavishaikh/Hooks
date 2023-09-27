import React from 'react'

export default function Child({sharedState, handleChange}) {
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        handleChange(newValue)
    }
  return (
    <div>
      {/* <h3>Child : {props.data}</h3> */}

      <input type="text" value={sharedState} onChange={handleInputChange} />

    </div>
  )
}
