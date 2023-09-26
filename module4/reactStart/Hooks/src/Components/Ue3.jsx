import React, { useEffect, useState } from 'react'

function Ue3() {
    const [count,setCount] = useState(0)

    //useEffect work depends upon state change 
    useEffect(()=>{
        document.title = `Button click ${count} times.`
        //side effect wala work
        console.log("useEffect")
    },[count])

    console.log("render");
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue3