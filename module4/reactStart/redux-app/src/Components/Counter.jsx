import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decNumber, incNumber } from '../redux/action';

function Counter() {
    const myState = useSelector((state)=>state.countReducer);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1)
    const num = parseInt(qty)
  
  return (
    <div>
        <h1>Counter app using react redux</h1>
        <h2>Increment and Decrement</h2>
        <h1>Count:{myState}</h1>
        <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/>
        <button onClick={()=>dispatch(incNumber(num))}>Increment</button>
        <button onClick={()=>dispatch(decNumber(num))}>Decrement</button>
    </div>
  )
}

export default Counter