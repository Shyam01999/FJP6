import React, { useEffect, useState } from 'react'

function Ue1() {
    const [count,setCount] = useState(0)

    //component did mount and component did Update
    useEffect(()=>{
        document.title = `Button click ${count} times.`
        //side effect wala work
    })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue1