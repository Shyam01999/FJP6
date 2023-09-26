import React, { useEffect, useState } from 'react'

function Ue2() {
    const [count,setCount] = useState(0)

    //component did mount 
    useEffect(()=>{
        document.title = `Button click ${count} times.`
        //side effect wala work
        console.log("useEffect")
    },[])

    console.log("render");
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue2