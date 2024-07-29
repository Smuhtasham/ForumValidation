import React, { useState } from 'react'

export default function Comp() {
let text; 
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("")

    const Add = () => {
      setCounter((prev) => prev + 5);
    };
    const Sub = () => {
      setCounter((prev) => prev - 5);
    };
    const Mul=()=>{
        setCounter((prev)=> prev*5);
    }
    const Div=()=>{
        setCounter((prev)=>prev/5);
    }
    return (
      <div className='App'>
        <button onClick={Add}>Add bg 5</button>
        <button onClick={Div}>Divide by 5</button>
        <p> {counter} </p>
        <button onClick={Sub}>Subtract by 5</button>
        <button onClick={Mul}>Multiply by 5</button>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        {value.length>10 && <p>You add more than 10 characters.</p>}
        
        
      </div>
    ); 
}
