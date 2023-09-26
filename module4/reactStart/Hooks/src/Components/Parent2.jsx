import React, { useContext } from 'react'
import context from './Context'

function Parent2() {
    const theme = useContext(context)
    console.log('parent2 render')
  return (
    <div className={theme?'dark':'light'}>
        Parent2
    </div>
  )
}

export default Parent2