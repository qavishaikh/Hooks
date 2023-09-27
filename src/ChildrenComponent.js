import React, {memo} from 'react'

function ChildrenComponent() {
    console.log("Children Component !")
  return (
    <div>
      <h2>Children Component</h2>
    </div>
  )
}

export default memo(ChildrenComponent)
