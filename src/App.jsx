import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function App() {
const [count,setCount]=   useState(0)
    const fn= useCallback(()=>{
  console.log("to check ");
  
},[count])
//mount- 

// fn ki recreation rokna 
  return (
    <div>
<button onClick={()=>setCount(count+1)}>inc</button>
      <Child fn={fn}/>
    </div>
  )
}
