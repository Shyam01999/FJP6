import React from 'react'

function Child() {
    console.log('child render')
  return (
    <div >
        Child
    </div>
  )
}

export default React.memo(Child)